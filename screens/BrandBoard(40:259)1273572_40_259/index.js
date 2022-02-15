import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_40_253} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e79/16d8/ae1107f9d6aaf742cabe7e70b74d9eba"
        }}
        style={styles.ImageBackground_40_260}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57d7/38d1/bb26701752db340b4761744c6862ede2"
        }}
        style={styles.ImageBackground_102_161}
      />
      <View style={styles.View_102_175}>
        <Text style={styles.Text_102_175}>
          Goodness of nature for your precious miracle
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/227b/e509/2b04ef6187e5f027f7cf1ddb7ac072f5"
        }}
        style={styles.ImageBackground_40_261}
      />
      <View style={styles.View_40_264} />
      <View style={styles.View_110_257} />
      <View style={styles.View_40_254} />
      <View style={styles.View_40_255} />
      <View style={styles.View_40_256} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15c2/c74a/09ab1ffe0e8ce5a54e77ac108aa0c7dd"
        }}
        style={styles.ImageBackground_102_174}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50e1/88ca/94dd1e10e724c5e5e6bbb23ff5c11861"
        }}
        style={styles.ImageBackground_102_167}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b33b/600c/04d6da2ca974ce132125fdcf360a2067"
        }}
        style={styles.ImageBackground_110_244}
      />
      <View style={styles.View_110_259}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fa7/497d/659058e5f1366158f1776207f194d6b5"
          }}
          style={styles.ImageBackground_3_5}
        />
        <View style={styles.View_4_12}>
          <View style={styles.View_4_16}>
            <View style={styles.View_4_17}>
              <Text style={styles.Text_4_17}>earth</Text>
            </View>
            <View style={styles.View_4_18}>
              <Text style={styles.Text_4_18}>tm</Text>
            </View>
            <View style={styles.View_4_19}>
              <Text style={styles.Text_4_19}>baby</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_102_168}>
        <View style={styles.View_102_169}>
          <View style={styles.View_102_170}>
            <Text style={styles.Text_102_170}>earth</Text>
          </View>
          <View style={styles.View_102_171}>
            <Text style={styles.Text_102_171}>tm</Text>
          </View>
          <View style={styles.View_102_172}>
            <Text style={styles.Text_102_172}>baby</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_110_245}>
        <View style={styles.View_110_246}>
          <View style={styles.View_110_247}>
            <Text style={styles.Text_110_247}>earth</Text>
          </View>
          <View style={styles.View_110_248}>
            <Text style={styles.Text_110_248}>tm</Text>
          </View>
          <View style={styles.View_110_249}>
            <Text style={styles.Text_110_249}>baby</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_110_258}>
        <View style={styles.View_16_4}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a6b/24fa/961a3136029e20e1d4f42ba05f416929"
            }}
            style={styles.ImageBackground_16_3}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15f7/791e/fff082b4173f069072d31f68e2c808d5"
            }}
            style={styles.ImageBackground_16_2}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f37/46eb/f32ab9fe82d26e9db5afe20027e1ca5b"
          }}
          style={styles.ImageBackground_102_162}
        />
      </View>
      <View style={styles.View_102_164}>
        <Text style={styles.Text_102_164}>earthBaby</Text>
      </View>
      <View style={styles.View_102_214}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db03/ac36/3e3c5564db63944eae3d705a03bcb037"
          }}
          style={styles.ImageBackground_102_166}
        />
        <View style={styles.View_102_165}>
          <Text style={styles.Text_102_165}>www.earthbaby.in</Text>
        </View>
      </View>
      <View style={styles.View_102_177}>
        <Text style={styles.Text_102_177}>Afterall, mother knows best.</Text>
      </View>
      <View style={styles.View_102_178}>
        <Text style={styles.Text_102_178}>
          Certified natural skincare products
        </Text>
      </View>
      <View style={styles.View_102_221}>
        <View style={styles.View_102_218}>
          <Text style={styles.Text_102_218}>
            Goodness of nature for your precious miracle
          </Text>
        </View>
        <View style={styles.View_102_219}>
          <Text style={styles.Text_102_219}>Afterall, mother knows best.</Text>
        </View>
        <View style={styles.View_102_222}>
          <View style={styles.View_102_220}>
            <Text style={styles.Text_102_220}>
              Certified natural skincare products
            </Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/984d/31ff/55177385feedef2b9381505876fb4db9"
        }}
        style={styles.ImageBackground_102_233}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3720/6bcf/a99a70329c9874adf637aa31b69d5e4f"
        }}
        style={styles.ImageBackground_102_225}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c55d/1fea/a9a5e95182b6d07dadf149fcd544d552"
        }}
        style={styles.ImageBackground_102_206}
      />
      <View style={styles.View_103_176}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb48/3059/34b95229b4e77f7297fd9847e3ce42b0"
          }}
          style={styles.ImageBackground_103_177}
        />
        <View style={styles.View_103_178}>
          <View style={styles.View_103_179}>
            <View style={styles.View_103_180}>
              <Text style={styles.Text_103_180}>earth</Text>
            </View>
            <View style={styles.View_103_181}>
              <Text style={styles.Text_103_181}>tm</Text>
            </View>
            <View style={styles.View_103_182}>
              <Text style={styles.Text_103_182}>baby</Text>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42f7/461e/a1fbf7096c0304ea4d13516124c557ea"
        }}
        style={styles.ImageBackground_40_267}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0dbb/4c4d/2f280ad78b6114ec4845e38f465edbf3"
        }}
        style={styles.ImageBackground_106_185}
      />
      <View style={styles.View_103_169}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64f9/8f42/7439652b7ce6beaff4e601af2866106f"
          }}
          style={styles.ImageBackground_103_170}
        />
        <View style={styles.View_103_171}>
          <View style={styles.View_103_172}>
            <View style={styles.View_103_173}>
              <Text style={styles.Text_103_173}>earth</Text>
            </View>
            <View style={styles.View_103_174}>
              <Text style={styles.Text_103_174}>tm</Text>
            </View>
            <View style={styles.View_103_175}>
              <Text style={styles.Text_103_175}>baby</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_106_227}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0b6/90f5/5069fc7bc65bde7d06d3de89e2346fe5"
          }}
          style={styles.ImageBackground_106_228}
        />
        <View style={styles.View_106_229}>
          <Text style={styles.Text_106_229}>www.earthbaby.in</Text>
        </View>
      </View>
      <View style={styles.View_110_242}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53c1/fb7b/d012cda00f85435001293a9f7c2e823f"
          }}
          style={styles.ImageBackground_109_233}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2994/ecc8/b91cdcaaf56420bcd6a9998a2a247a0a"
          }}
          style={styles.ImageBackground_110_240}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d633/7fd7/419a8f87f1210ea473b7d3d1b3a6888b"
        }}
        style={styles.ImageBackground_109_239}
      />
      <View style={styles.View_109_230}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0b6/90f5/5069fc7bc65bde7d06d3de89e2346fe5"
          }}
          style={styles.ImageBackground_109_231}
        />
        <View style={styles.View_109_232}>
          <Text style={styles.Text_109_232}>www.earthbaby.in</Text>
        </View>
      </View>
      <View style={styles.View_110_243}>
        <Text style={styles.Text_110_243}>
          For the blissful moments that will be chreished forever.
        </Text>
      </View>
      <View style={styles.View_110_250}>
        <Text style={styles.Text_110_250}>
          Gentle &amp; enriching skincare products
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3719/8923/b26b4c4592b9053135350601d0c8876d"
        }}
        style={styles.ImageBackground_110_251}
      />
      <View style={styles.View_110_252}>
        <View style={styles.View_110_253}>
          <View style={styles.View_110_254}>
            <Text style={styles.Text_110_254}>earth</Text>
          </View>
          <View style={styles.View_110_255}>
            <Text style={styles.Text_110_255}>tm</Text>
          </View>
          <View style={styles.View_110_256}>
            <Text style={styles.Text_110_256}>baby</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("564%") },
  View_40_253: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("11%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_40_260: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("237%"),
    minHeight: hp("237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("49%"),
    resizeMode: "cover"
  },
  ImageBackground_102_161: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("236%"),
    minHeight: hp("236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("49%")
  },
  View_102_175: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("226%"),
    justifyContent: "center"
  },
  Text_102_175: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 56.22650146484375,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_40_261: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("113%"),
    minHeight: hp("113%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("295%")
  },
  View_40_264: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("132%"),
    minHeight: hp("132%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("418%"),
    backgroundColor: "rgba(122, 158, 129, 1)"
  },
  View_110_257: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("132%"),
    minHeight: hp("132%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("417%"),
    backgroundColor: "rgba(27, 27, 27, 1)"
  },
  View_40_254: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("11%"),
    backgroundColor: "rgba(122, 158, 129, 1)"
  },
  View_40_255: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("11%"),
    backgroundColor: "rgba(234, 237, 217, 1)"
  },
  View_40_256: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("11%"),
    backgroundColor: "rgba(177, 164, 123, 1)"
  },
  ImageBackground_102_174: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("236%"),
    minHeight: hp("236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("50%")
  },
  ImageBackground_102_167: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("446%"),
    resizeMode: "cover"
  },
  ImageBackground_110_244: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("49%"),
    minHeight: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("314%"),
    resizeMode: "cover"
  },
  View_110_259: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("54%")
  },
  ImageBackground_3_5: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_4_12: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%")
  },
  View_4_16: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_17: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_4_17: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 45.968666076660156,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.449216651916504,
    textTransform: "none"
  },
  View_4_18: {
    width: wp("0%"),
    minWidth: wp("0%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_4_18: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13.709917068481445,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.41774792671203614,
    textTransform: "none"
  },
  View_4_19: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_4_19: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 25.690242767333984,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.7979633522033691,
    textTransform: "none"
  },
  View_102_168: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("505%")
  },
  View_102_169: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_102_170: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_102_170: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 123.58309936523438,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 3.8645774841308596,
    textTransform: "none"
  },
  View_102_171: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_102_171: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 35.559783935546875,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.1139945983886719,
    textTransform: "none"
  },
  View_102_172: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%"),
    justifyContent: "center"
  },
  Text_102_172: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 70.17398071289062,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 4.794568939208984,
    textTransform: "none"
  },
  View_110_245: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("364%")
  },
  View_110_246: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_110_247: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_110_247: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 103.5770263671875,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 3.2394256591796875,
    textTransform: "none"
  },
  View_110_248: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_110_248: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30.351585388183594,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9337896347045899,
    textTransform: "none"
  },
  View_110_249: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("16%"),
    justifyContent: "center"
  },
  Text_110_249: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 58.072303771972656,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 4.0189767074584966,
    textTransform: "none"
  },
  View_110_258: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("76%"),
    minHeight: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("441%")
  },
  View_16_4: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("69%"),
    minHeight: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  ImageBackground_16_3: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("69%"),
    minHeight: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_16_2: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("53%"),
    minHeight: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("8%"),
    resizeMode: "cover"
  },
  ImageBackground_102_162: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("76%"),
    minHeight: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_102_164: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("525%"),
    justifyContent: "center"
  },
  Text_102_164: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 62.029441833496094,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_102_214: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("271%")
  },
  ImageBackground_102_166: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_102_165: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_102_165: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24.684551239013672,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_102_177: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("252%"),
    justifyContent: "center"
  },
  Text_102_177: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 31.014720916748047,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_102_178: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("222%"),
    justifyContent: "center"
  },
  Text_102_178: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 28.113250732421875,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_102_221: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("232%")
  },
  View_102_218: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_102_218: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 56.22650146484375,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_102_219: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%"),
    justifyContent: "center"
  },
  Text_102_219: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 31.014720916748047,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_102_222: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(122, 158, 129, 1)"
  },
  View_102_220: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_102_220: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 28.113250732421875,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_102_233: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("143%"),
    minHeight: hp("143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("78%")
  },
  ImageBackground_102_225: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("129%"),
    minHeight: hp("129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("93%"),
    resizeMode: "cover"
  },
  ImageBackground_102_206: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("255%"),
    minHeight: hp("255%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("295%")
  },
  View_103_176: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("175%"),
    minHeight: hp("175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("81%")
  },
  ImageBackground_103_177: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("116%"),
    minHeight: hp("116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_103_178: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("116%")
  },
  View_103_179: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_103_180: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_103_180: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 235.9991455078125,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 7.374978637695313,
    textTransform: "none"
  },
  View_103_181: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_103_181: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 68.03579711914062,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2.1258949279785155,
    textTransform: "none"
  },
  View_103_182: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("39%"),
    justifyContent: "center"
  },
  Text_103_182: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 133.35873413085938,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 9.149730377197265,
    textTransform: "none"
  },
  ImageBackground_40_267: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("274%"),
    minHeight: hp("274%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("11%")
  },
  ImageBackground_106_185: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("260%"),
    minHeight: hp("260%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("293%"),
    resizeMode: "cover"
  },
  View_103_169: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("56%")
  },
  ImageBackground_103_170: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_103_171: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%")
  },
  View_103_172: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_103_173: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_103_173: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 41.75266647338867,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.2938166618347169,
    textTransform: "none"
  },
  View_103_174: {
    width: wp("0%"),
    minWidth: wp("0%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_103_174: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 11.918108940124512,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3729527235031128,
    textTransform: "none"
  },
  View_103_175: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_103_175: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 23.184856414794922,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.6051671028137207,
    textTransform: "none"
  },
  View_106_227: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("263%")
  },
  ImageBackground_106_228: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  View_106_229: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_106_229: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 36.29624938964844,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_110_242: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("95%"),
    minHeight: hp("95%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("334%")
  },
  ImageBackground_109_233: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("92%"),
    minHeight: hp("92%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  ImageBackground_110_240: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("95%"),
    minHeight: hp("95%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_109_239: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("182%"),
    minHeight: hp("182%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("370%")
  },
  View_109_230: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("531%")
  },
  ImageBackground_109_231: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  View_109_232: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_109_232: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 36.29624938964844,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_110_243: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("468%"),
    justifyContent: "center"
  },
  Text_110_243: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 91.54203033447266,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_110_250: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("461%"),
    justifyContent: "center"
  },
  Text_110_250: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 46.27101516723633,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_110_251: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("56%"),
    minHeight: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("24%"),
    resizeMode: "cover"
  },
  View_110_252: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("80%")
  },
  View_110_253: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_110_254: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_110_254: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 117.84426879882812,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 3.6961067199707034,
    textTransform: "none"
  },
  View_110_255: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_110_255: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 33.61726379394531,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.0654315948486328,
    textTransform: "none"
  },
  View_110_256: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("19%"),
    justifyContent: "center"
  },
  Text_110_256: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 66.37374114990234,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 4.585555763244629,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
