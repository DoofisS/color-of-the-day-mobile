import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Clipboard,
} from "react-native";

// import {
//   GAMBannerAd,
//   BannerAdSize,
//   TestIds,
// } from "react-native-google-mobile-ads";
// const adUnitId = __DEV__
//   ? TestIds.BANNER
//   : "ca-app-pub-7156063296706081/1730990233";

export default function App() {
  const [color, setColor] = useState("#000000"); // initial color is black
  const [phrase, setPhrase] = useState("");

  const phrases = [
    "You are the best",
    "Have a good day",
    "Have a nice day",
    "You are amazing",
    "You're doing great",
    "I believe in you",
    "Keep up the good work",
    "You're awesome",
    "You've got this",
    "You can do it",
    "I'm proud of you",
    "You're a superstar",
    "You're so talented",
    "You're incredible",
    "You're fantastic",
    "You're the greatest",
    "You're one of a kind",
    "You're a winner",
    "You're a champion",
    "You're outstanding",
    "You're phenomenal",
    "You're a rockstar",
    "You're a genius",
    "You're a legend",
    "You're a boss",
    "You're a queen",
    "You're a king",
    "You're a superstar",
    "You're a miracle",
    "You're a shining star",
    "You're a ray of sunshine",
    "You're a breath of fresh air",
    "You light up my day",
    "You're a joy to be around",
    "You make me happy",
    "You make the world a better place",
    "You're a blessing",
    "You're a gift",
    "You're a treasure",
    "You're a delight",
    "You're a pleasure to work with",
    "You're a wonderful person",
    "You're so kind",
    "You're so thoughtful",
    "You're so caring",
    "You're so generous",
    "You're so compassionate",
    "You have a heart of gold",
    "You're so understanding",
    "You're so patient",
    "You're so supportive",
    "You're so encouraging",
    "You're so inspiring",
    "You're so creative",
    "You're so talented",
    "You're so intelligent",
    "You're so funny",
    "You're so beautiful",
    "You're so handsome",
    "You're so charming",
    "You're so likable",
    "You're so easy to talk to",
    "You have a great sense of humor",
    "You have a beautiful smile",
    "You have a great personality",
    "You have a magnetic personality",
    "You have a way with words",
    "You're so eloquent",
    "You're so articulate",
    "You have a brilliant mind",
    "You have a great work ethic",
    "You're so reliable",
    "You're so trustworthy",
    "You're so responsible",
    "You're so dependable",
    "You're so organized",
    "You're so efficient",
    "You're so productive",
    "You're so dedicated",
    "You're so committed",
    "You're so hardworking",
    "You're so persevering",
    "You're so resilient",
    "You're so courageous",
    "You're so brave",
    "You're so confident",
    "You're so bold",
    "You're so determined",
    "You're so persistent",
    "You're so focused",
    "You're so disciplined",
    "You're so successful",
    "You're so accomplished",
    "You're so talented",
    "You're so skilled",
    "You're so experienced",
    "You're so knowledgeable",
    "You're so wise",
    "You're so insightful",
    "You have great ideas",
    "You're a great problem-solver",
  ];

  const generateRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16); // generates a random hexadecimal color code
    setColor("#" + randomColor); // sets the state of color to the random color
  };

  const choosePhraseofTheDay = () => {
    const numberOfPhrase = Math.floor(Math.random() * 100);
    setPhrase(phrases[numberOfPhrase]);
  };

  const copyToClipboard = () => {
    Clipboard.setString(color); // copies the current color to the clipboard
  };

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <TouchableOpacity
        onPress={() => {
          generateRandomColor(), choosePhraseofTheDay();
        }}
      >
        <Text style={styles.buttonText}>Generate Your Color Of The Day</Text>
      </TouchableOpacity>
      <Text style={styles.phrase}>{phrase}</Text>

      <TouchableOpacity style={styles.copyButton} onPress={copyToClipboard}>
        <Text style={styles.buttonText}>Copy Color to Clipboard</Text>
      </TouchableOpacity>

      {/* <GAMBannerAd
        unitId={adUnitId}
        sizes={[BannerAdSize.FULL_BANNER]}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.3)",
    marginVertical: 20,
  },
  phrase: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.3)",
    marginVertical: 20,
    textAlign: "center",
  },
  colorPhrase: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.3)",
    marginVertical: 20,
    textAlign: "center",
    position: "absolute",
    bottom: 100,
  },
  copyButton: {
    position: "absolute",
    bottom: 50,
  },
});
