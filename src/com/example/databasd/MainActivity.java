package com.example.databasd;


import android.os.Bundle;
import org.apache.cordova.DroidGap;

public class MainActivity extends DroidGap {

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		 super.loadUrl("file:///android_asset/www/javascript_login.html");
	}
}
