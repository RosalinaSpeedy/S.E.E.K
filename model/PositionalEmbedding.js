const tf = require("@tensorflow/tfjs");
const tfn = require("@tensorflow/tfjs-node");
//@tf.keras.utils.register_keras_serializable("positional_embedding")
class PositionalEmbedding extends tf.layers.Layer {
    constructor(config, sequenceLength, inputDim, outputDim) {
        super(config || {});
        this.sequenceLength = sequenceLength
        this.inputDim = inputDim
        this.outputDim = outputDim
    }

    //new in Keras 3, see: https://keras.io/guides/making_new_layers_and_models_via_subclassing/#best-practice-deferring-weight-creation-until-the-shape-of-the-inputs-is-known
    //See also here: https://github.com/keras-team/keras-nlp/blob/4601d88a61a5d3d15279865769af5155804dd785/keras_nlp/src/layers/modeling/token_and_position_embedding.py#L115
    build(inputShape) {
        //token embeddings: semantic information
        this.tokenEmbeddings = tf.layers.Embedding(
            inputDim=this.inputDim, outputDim=this.outputDim
        )
        //# position embeddings: syntactic (spatial/temporal) information
        this.positionEmbeddings =tf.layers.Embedding(
            inputDim=this.sequenceLength, outputDim=this.outputDim
        )
    }
    call(inputs) {
        length = tf.shape(inputs)[-1]
        embeddedTokens = this.tokenEmbeddings(inputs)
        positions = tf.range(start=0, limit=length, delta=1) //delta: step size
        embeddedPositions = this.positionEmbeddings.apply(positions)
        //both embeddings are simply added together!
        return embeddedTokens + embeddedPositions
    }
    //copied from the source here: https://github.com/keras-team/keras-nlp/blob/4601d88a61a5d3d15279865769af5155804dd785/keras_nlp/src/layers/modeling/token_and_position_embedding.py#L146
    compute_mask(self, inputs, mask=None):
        return self.token_embeddings.compute_mask(inputs, mask=mask)

    def get_config(self): # retrieve config as a dict
        config = super().get_config()
        config.update({
            "output_dim": self.output_dim,
            "sequence_length": self.sequence_length,
            "input_dim": self.input_dim,
        })
        return config
}