import React from "react";
import { WebView } from "react-native-webview";
import { SafeAreaView } from "react-native-safe-area-context";

function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: "https://infinite.red" }} style={{ flex: 1 }} />
    </SafeAreaView>
  );
}

export { Home };
