package com.justoglobal

import android.os.Bundle
import android.window.SplashScreen
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.facebook.react.shell.MainReactPackage
// import org.devio.rn.splashscreen.SplashScreenReactPackage
// import org.devio.rn.splashscreen.SplashScreen
import java.util.Arrays


class MainActivity : ReactActivity() {

/**
    private val mReactNativeHost: ReactNativeHost = object : ReactNativeHost(this) {
        override fun getUseDeveloperSupport(): Boolean {
            return BuildConfig.DEBUG
        }

        override fun getPackages(): List<ReactPackage> {
            return Arrays.asList<ReactPackage>(
                MainReactPackage(),
                SplashScreenReactPackage() //here
            )
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        SplashScreen.show(this) // here
        super.onCreate(savedInstanceState)
    }

    override fun getReactNativeHost(): ReactNativeHost? {
        return mReactNativeHost
    }
*/
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "justoglobal"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}
