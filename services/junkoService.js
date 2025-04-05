//https://medium.com/@ferlatti.aldo/react-native-tensorflow-js-implementing-a-model-daad1a2c7f30
//import * as moduleName from "path/to/module";
// const tf = require('@tensorflow/tfjs')
// //import { bundleResourceIO, decodeJpeg } from '@tensorflow/tfjs-react-native'
// //import * as FileSystem from 'expo-file-system';

// const modelJSON = require('../model/model.json');
const SEQUENCE_LENGTH = 3;
const TOKEN_INDEX = require('../model/TOKEN_INDEX.json');
//const modelWeights = require('../model/group1-shard2of4.bin');

//onst tf = require('@tensorflow/tfjs');
//global.fetch = require('node-fetch')

const tf = require("@tensorflow/tfjs");
const tfn = require("@tensorflow/tfjs-node");
const handler = tfn.io.fileSystem("../model/model.json");


const loadModel = async () => {
    //.ts: const loadModel = async ():Promise<void|tf.LayersModel>=>{
    const model = await tf.loadLayersModel(
        handler
    ).catch((e) => {
        console.log("[LOADING ERROR] info:", e)
    })
    return model
}

const model = loadModel();

// const model = loadModel();

// //const model = loadModel()
// let prompt = "Addiction name: Pornography\nTriggers:\n- loneliness\n- boredom\n- tiredness\nAddiction Severity:\n0.6\nWarning Signs:\n";
// console.log(model)


// const transformPromptToTensor = async (prompt) => {
//     //.ts: const transformImageToTensor = async (uri:string):Promise<tf.Tensor>=>{
//     //read the image as base64
//     const img64 = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 })
//     const imgBuffer = tf.util.encodeString(img64, 'base64').buffer
//     const raw = new Uint8Array(imgBuffer)
//     let imgTensor = decodeJpeg(raw)
//     const scalar = tf.scalar(255)
//     //resize the image
//     imgTensor = tf.image.resizeNearestNeighbor(imgTensor, [300, 300])
//     //normalize; if a normalization layer is in the model, this step can be skipped
//     const tensorScaled = imgTensor.div(scalar)
//     //final shape of the rensor
//     const img = tf.reshape(tensorScaled, [1, 300, 300, 3])
//     return img
// }

// function generate_warning_signs(sentence, generate_length, temperature) {
//     let empty = "";
//     for (let i = 0; i < generate_length; i++) {
//         let tokenized_sentence = tokenize(sentence)                         //encode the sentence & feed to the model
//         let predictions = model.predict(tokenized_sentence)         //which gives us predictions  (crop to seq_len!)
//         let next_token = sample_next(predictions[i], temperature)                //use these to sample (get the index)
//         let sampled_token = TOKEN_INDEX[next_token]                                     //use the index to pick the token
//         empty = empty + sampled_token + "\n"
//         //add it to our sentence
//     }
//     return empty
// }

// function sample_next(predictions, temperature) {
//     predictions = tf.asarray(predictions)
//     predictions = tf.log(predictions) / temperature                 //temperature reweighting
//     exp_preds = tf.exp(predictions)                                 //these two lines are actually
//     predictions = exp_preds / tf.sum(exp_preds)                     //a softmax
//     probas = tf.random.multinomial(1, predictions, 1)               //sampling using our probabilities
//     return tf.argmax(probas)
// }

// function tokenize(text) {
//     text = text.toLowerCase();
//     text = text.replace('!"#$%&()*+,-./:;<=>?@[\\]^_`{|}~\t', '');
//     let split_text = text.split('\n');
//     var tokens = [];
//     split_text.forEach(element => {
//         if (TOKEN_INDEX[element] != undefined) {
//             tokens.push(TOKEN_INDEX[element]);
//         }
//     });
//     return tokens;
// }

// //https://www.geeksforgeeks.org/string-tensors-in-tensorflow/
// //https://www.tensorflow.org/api_docs/python/tf/strings/split
// const splitLines = (plans) => {
//     return tf.strings.split(plans, sep = "\n");
// }

// // // below code modified from Jeremie Wenger - Artifical Intelligence: https://drive.google.com/file/d/14WFNX1nfbdqhhg0nzr8aFzqdyIriYsa_/view
// // const text_vectorization = tf.keras.layers.TextVectorization( //note that we don't limit our vocab size here (no need)!
// //     standardize=None,
// //     split=splitLines, //https://www.tensorflow.org/api_docs/python/tf/keras/layers/TextVectorization
// //     output_mode="int"
// // )

// // prompt += generate_warning_signs(prompt, 3, .9)
// // prompt += "Coping Strategies:\n"
// // prompt += generate_warning_signs(prompt, 3, .9)
// // //prompt += "- " + generate_warning_sign(sentence=prompt, generate_length=10, temperature=.9)
// // //rompt += "- " + generate_warning_sign(sentence=prompt, generate_length=10, temperature=.9)
// // //prompt += "- " + generate_warning_sign(sentence=prompt, generate_length=10, temperature=.9)
// // console.log(prompt);