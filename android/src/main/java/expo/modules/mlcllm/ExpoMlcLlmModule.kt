package expo.modules.mlcllm

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import ai.mlc.mlcllm.MLCEngine
import ai.mlc.mlcllm.OpenAIProtocol
import ai.mlc.mlcllm.OpenAIProtocol.*
import android.annotation.SuppressLint
import android.content.Context
import android.os.Bundle
import android.util.Log
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.channels.ReceiveChannel
import kotlinx.coroutines.launch
import java.io.File

class ExpoMlcLlmModule : Module() {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  override fun definition() = ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('ExpoMlcLlm')` in JavaScript.
    Name("ExpoMlcLlm")

    OnCreate {
      Log.i("Init", "Hello from mlc-llm!")
    }

    // Sets constant properties on the module. Can take a dictionary or a closure that returns a dictionary.
    Constants(
      "PI" to Math.PI
    )

    // Defines event names that the module can send to JavaScript.
    Events("onChange")

    // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
    Function("hello") {
      // init the MLCEngine
      "Hello from Kotlin!"
    }

    Function("loadModel") { modelName: String -> 
      // Load the model
      Log.i("Module loading", "trying to load model $modelName")
      val modelPath = File(modelName).toString()
      val modelLib = "phi3_q4f16_1_5a9dfbccbb0147e0e063927839645159"
      Log.i("Module loaded", modelPath)
      // try {
      //   val engine = MLCEngine()
      //   engine.unload()
      //       engine.reload(modelPath, modelLib)
      //   "Model $modelPath loaded"
      // } catch (e: Exception) {
      //   Log.e("Module loading", "Error loading model $modelName")
      //   e.printStackTrace()
      //   "Error loading model $modelName"
      // }
      "Model $modelPath loaded"
    }

    // Defines a JavaScript function that always returns a Promise and whose native code
    // is by default dispatched on the different thread than the JavaScript runtime runs on.
    AsyncFunction("setValueAsync") { value: String ->
      // Send an event to JavaScript.
      sendEvent("onChange", mapOf(
        "value" to value
      ))
    }

    // Enables the module to be used as a native view. Definition components that are accepted as part of
    // the view definition: Prop, Events.
    View(ExpoMlcLlmView::class) {
      // Defines a setter for the `name` prop.
      Prop("name") { view: ExpoMlcLlmView, prop: String ->
        println(prop)
      }
    }
  }
}
