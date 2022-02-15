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
      <View style={styles.View_111_261} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e79/16d8/ae1107f9d6aaf742cabe7e70b74d9eba"
        }}
        style={styles.ImageBackground_111_262}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/570b/6c76/75d25c9b2f6178a30f64eba6e44f2522"
        }}
        style={styles.ImageBackground_111_263}
      />
      <View style={styles.View_111_264}>
        <Text style={styles.Text_111_264}>
          Goodness of nature for your precious miracle
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5acd/d729/61c089550c6dc852590af40f0129e25e"
        }}
        style={styles.ImageBackground_111_265}
      />
      <View style={styles.View_111_266} />
      <View style={styles.View_111_267} />
      <View style={styles.View_111_268} />
      <View style={styles.View_111_269} />
      <View style={styles.View_111_270} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15c2/c74a/09ab1ffe0e8ce5a54e77ac108aa0c7dd"
        }}
        style={styles.ImageBackground_111_271}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a22/9118/22e8c564aaed03c91d3ff386befc6887"
        }}
        style={styles.ImageBackground_111_272}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b33b/600c/04d6da2ca974ce132125fdcf360a2067"
        }}
        style={styles.ImageBackground_111_273}
      />
      <View style={styles.View_111_274}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fa7/497d/659058e5f1366158f1776207f194d6b5"
          }}
          style={styles.ImageBackground_111_275}
        />
        <View style={styles.View_111_276}>
          <View style={styles.View_111_277}>
            <View style={styles.View_111_278}>
              <Text style={styles.Text_111_278}>earth</Text>
            </View>
            <View style={styles.View_111_279}>
              <Text style={styles.Text_111_279}>tm</Text>
            </View>
            <View style={styles.View_111_280}>
              <Text style={styles.Text_111_280}>baby</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_111_281}>
        <View style={styles.View_111_282}>
          <View style={styles.View_111_283}>
            <Text style={styles.Text_111_283}>earth</Text>
          </View>
          <View style={styles.View_111_284}>
            <Text style={styles.Text_111_284}>tm</Text>
          </View>
          <View style={styles.View_111_285}>
            <Text style={styles.Text_111_285}>baby</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_111_286}>
        <View style={styles.View_111_287}>
          <View style={styles.View_111_288}>
            <Text style={styles.Text_111_288}>earth</Text>
          </View>
          <View style={styles.View_111_289}>
            <Text style={styles.Text_111_289}>tm</Text>
          </View>
          <View style={styles.View_111_290}>
            <Text style={styles.Text_111_290}>baby</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_111_291}>
        <View style={styles.View_111_292}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a6b/24fa/961a3136029e20e1d4f42ba05f416929"
            }}
            style={styles.ImageBackground_111_293}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36c3/9710/286ee15292b9447b1fa338304390f5d1"
            }}
            style={styles.ImageBackground_111_294}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/348a/d532/f4c459fb2d1ef9ef418d1422a4698a1e"
          }}
          style={styles.ImageBackground_111_295}
        />
      </View>
      <View style={styles.View_111_296}>
        <Text style={styles.Text_111_296}>earthBaby</Text>
      </View>
      <View style={styles.View_111_297}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db03/ac36/3e3c5564db63944eae3d705a03bcb037"
          }}
          style={styles.ImageBackground_111_298}
        />
        <View style={styles.View_111_299}>
          <Text style={styles.Text_111_299}>www.earthbaby.in</Text>
        </View>
      </View>
      <View style={styles.View_111_300}>
        <Text style={styles.Text_111_300}>Afterall, mother knows best.</Text>
      </View>
      <View style={styles.View_111_301}>
        <Text style={styles.Text_111_301}>
          Certified natural skincare products
        </Text>
      </View>
      <View style={styles.View_111_302}>
        <View style={styles.View_111_303}>
          <Text style={styles.Text_111_303}>
            Goodness of nature for your precious miracle
          </Text>
        </View>
        <View style={styles.View_111_304}>
          <Text style={styles.Text_111_304}>Afterall, mother knows best.</Text>
        </View>
        <View style={styles.View_111_305}>
          <View style={styles.View_111_306}>
            <Text style={styles.Text_111_306}>
              Certified natural skincare products
            </Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d499/0fd0/3d33198d3bdcd0fac301c85372e27f70"
        }}
        style={styles.ImageBackground_111_307}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3720/6bcf/a99a70329c9874adf637aa31b69d5e4f"
        }}
        style={styles.ImageBackground_111_310}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb5d/d1b4/1226ae77af1b1e3a181580d88ee622c4"
        }}
        style={styles.ImageBackground_111_311}
      />
      <View style={styles.View_111_327}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb48/3059/34b95229b4e77f7297fd9847e3ce42b0"
          }}
          style={styles.ImageBackground_111_328}
        />
        <View style={styles.View_111_329}>
          <View style={styles.View_111_330}>
            <View style={styles.View_111_331}>
              <Text style={styles.Text_111_331}>earth</Text>
            </View>
            <View style={styles.View_111_332}>
              <Text style={styles.Text_111_332}>tm</Text>
            </View>
            <View style={styles.View_111_333}>
              <Text style={styles.Text_111_333}>baby</Text>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42f7/461e/a1fbf7096c0304ea4d13516124c557ea"
        }}
        style={styles.ImageBackground_111_334}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0dbb/4c4d/2f280ad78b6114ec4845e38f465edbf3"
        }}
        style={styles.ImageBackground_111_335}
      />
      <View style={styles.View_111_336}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64f9/8f42/7439652b7ce6beaff4e601af2866106f"
          }}
          style={styles.ImageBackground_111_337}
        />
        <View style={styles.View_111_338}>
          <View style={styles.View_111_339}>
            <View style={styles.View_111_340}>
              <Text style={styles.Text_111_340}>earth</Text>
            </View>
            <View style={styles.View_111_341}>
              <Text style={styles.Text_111_341}>tm</Text>
            </View>
            <View style={styles.View_111_342}>
              <Text style={styles.Text_111_342}>baby</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_111_343}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0b6/90f5/5069fc7bc65bde7d06d3de89e2346fe5"
          }}
          style={styles.ImageBackground_111_344}
        />
        <View style={styles.View_111_345}>
          <Text style={styles.Text_111_345}>www.earthbaby.in</Text>
        </View>
      </View>
      <View style={styles.View_111_346}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53c1/fb7b/d012cda00f85435001293a9f7c2e823f"
          }}
          style={styles.ImageBackground_111_347}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa3e/94fa/79ffd2575ae3e27ff8bc431614ae60e5"
          }}
          style={styles.ImageBackground_111_348}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b30/c8ba/fd6c0ec046420f0389f1d9a0202c2e03"
        }}
        style={styles.ImageBackground_111_349}
      />
      <View style={styles.View_111_350}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0b6/90f5/5069fc7bc65bde7d06d3de89e2346fe5"
          }}
          style={styles.ImageBackground_111_351}
        />
        <View style={styles.View_111_352}>
          <Text style={styles.Text_111_352}>www.earthbaby.in</Text>
        </View>
      </View>
      <View style={styles.View_111_353}>
        <Text style={styles.Text_111_353}>
          For the blissful moments that will be chreished forever.
        </Text>
      </View>
      <View style={styles.View_111_354}>
        <Text style={styles.Text_111_354}>
          Gentle &amp; enriching skincare products
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3719/8923/b26b4c4592b9053135350601d0c8876d"
        }}
        style={styles.ImageBackground_111_355}
      />
      <View style={styles.View_111_356}>
        <View style={styles.View_111_357}>
          <View style={styles.View_111_358}>
            <Text style={styles.Text_111_358}>earth</Text>
          </View>
          <View style={styles.View_111_359}>
            <Text style={styles.Text_111_359}>tm</Text>
          </View>
          <View style={styles.View_111_360}>
            <Text style={styles.Text_111_360}>baby</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("564%") },
  View_111_261: {
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
  ImageBackground_111_262: {
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
  ImageBackground_111_263: {
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
  View_111_264: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("227%"),
    justifyContent: "center"
  },
  Text_111_264: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 56.22650146484375,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_111_265: {
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
  View_111_266: {
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
  View_111_267: {
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
  View_111_268: {
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
  View_111_269: {
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
  View_111_270: {
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
  ImageBackground_111_271: {
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
  ImageBackground_111_272: {
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
  ImageBackground_111_273: {
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
  View_111_274: {
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
  ImageBackground_111_275: {
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
  View_111_276: {
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
  View_111_277: {
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
  View_111_278: {
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
  Text_111_278: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 45.968666076660156,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.449216651916504,
    textTransform: "none"
  },
  View_111_279: {
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
  Text_111_279: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13.709917068481445,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.41774792671203614,
    textTransform: "none"
  },
  View_111_280: {
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
  Text_111_280: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 25.690242767333984,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.7979633522033691,
    textTransform: "none"
  },
  View_111_281: {
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
  View_111_282: {
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
  View_111_283: {
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
  Text_111_283: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 123.58309936523438,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 3.8645774841308596,
    textTransform: "none"
  },
  View_111_284: {
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
  Text_111_284: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 35.559783935546875,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.1139945983886719,
    textTransform: "none"
  },
  View_111_285: {
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
  Text_111_285: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 70.17398071289062,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 4.794568939208984,
    textTransform: "none"
  },
  View_111_286: {
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
  View_111_287: {
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
  View_111_288: {
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
  Text_111_288: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 103.5770263671875,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 3.2394256591796875,
    textTransform: "none"
  },
  View_111_289: {
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
  Text_111_289: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30.351585388183594,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9337896347045899,
    textTransform: "none"
  },
  View_111_290: {
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
  Text_111_290: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 58.072303771972656,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 4.0189767074584966,
    textTransform: "none"
  },
  View_111_291: {
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
  View_111_292: {
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
  ImageBackground_111_293: {
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
  ImageBackground_111_294: {
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
  ImageBackground_111_295: {
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
  View_111_296: {
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
  Text_111_296: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 62.029441833496094,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_111_297: {
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
  ImageBackground_111_298: {
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
  View_111_299: {
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
  Text_111_299: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24.684551239013672,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_111_300: {
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
  Text_111_300: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 31.014720916748047,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_111_301: {
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
  Text_111_301: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 28.113250732421875,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_111_302: {
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
  View_111_303: {
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
  Text_111_303: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 56.22650146484375,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_111_304: {
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
  Text_111_304: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 31.014720916748047,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_111_305: {
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
  View_111_306: {
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
  Text_111_306: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 28.113250732421875,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_111_307: {
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
  ImageBackground_111_310: {
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
  ImageBackground_111_311: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("260%"),
    minHeight: hp("260%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("293%")
  },
  View_111_327: {
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
  ImageBackground_111_328: {
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
  View_111_329: {
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
  View_111_330: {
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
  View_111_331: {
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
  Text_111_331: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 235.9991455078125,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 7.374978637695313,
    textTransform: "none"
  },
  View_111_332: {
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
  Text_111_332: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 68.03579711914062,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2.1258949279785155,
    textTransform: "none"
  },
  View_111_333: {
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
  Text_111_333: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 133.35873413085938,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 9.149730377197265,
    textTransform: "none"
  },
  ImageBackground_111_334: {
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
  ImageBackground_111_335: {
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
  View_111_336: {
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
  ImageBackground_111_337: {
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
  View_111_338: {
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
  View_111_339: {
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
  View_111_340: {
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
  Text_111_340: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 41.75266647338867,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.2938166618347169,
    textTransform: "none"
  },
  View_111_341: {
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
  Text_111_341: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 11.918108940124512,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3729527235031128,
    textTransform: "none"
  },
  View_111_342: {
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
  Text_111_342: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 23.184856414794922,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.6051671028137207,
    textTransform: "none"
  },
  View_111_343: {
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
  ImageBackground_111_344: {
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
  View_111_345: {
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
  Text_111_345: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 36.29624938964844,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_111_346: {
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
  ImageBackground_111_347: {
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
  ImageBackground_111_348: {
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
  ImageBackground_111_349: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("187%"),
    minHeight: hp("187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("365%")
  },
  View_111_350: {
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
  ImageBackground_111_351: {
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
  View_111_352: {
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
  Text_111_352: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 36.29624938964844,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_111_353: {
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
  Text_111_353: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 91.54203033447266,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_111_354: {
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
  Text_111_354: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 46.27101516723633,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_111_355: {
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
  View_111_356: {
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
  View_111_357: {
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
  View_111_358: {
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
  Text_111_358: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 117.84426879882812,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 3.6961067199707034,
    textTransform: "none"
  },
  View_111_359: {
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
  Text_111_359: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 33.61726379394531,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.0654315948486328,
    textTransform: "none"
  },
  View_111_360: {
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
  Text_111_360: {
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
