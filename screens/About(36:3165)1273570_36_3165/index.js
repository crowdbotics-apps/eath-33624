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
      <View style={styles.View_36_3166}>
        <View style={styles.View_I36_3166_24_214}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4175/c20b/f466b42035b83423a3d3cce0a29665fc"
            }}
            style={styles.ImageBackground_I36_3166_24_215}
          />
        </View>
        <View style={styles.View_I36_3166_24_216}>
          <View style={styles.View_I36_3166_24_217}>
            <View style={styles.View_I36_3166_24_218}>
              <Text style={styles.Text_I36_3166_24_218}>Home</Text>
            </View>
          </View>
          <View style={styles.View_I36_3166_24_219}>
            <View style={styles.View_I36_3166_24_220}>
              <Text style={styles.Text_I36_3166_24_220}>Shop</Text>
            </View>
          </View>
          <View style={styles.View_I36_3166_24_221}>
            <View style={styles.View_I36_3166_24_222}>
              <Text style={styles.Text_I36_3166_24_222}>About us</Text>
            </View>
          </View>
          <View style={styles.View_I36_3166_24_223}>
            <View style={styles.View_I36_3166_24_224}>
              <Text style={styles.Text_I36_3166_24_224}>Contact</Text>
            </View>
          </View>
          <View style={styles.View_I36_3166_24_225}>
            <View style={styles.View_I36_3166_24_226}>
              <Text style={styles.Text_I36_3166_24_226}>Blog</Text>
            </View>
          </View>
          <View style={styles.View_I36_3166_24_227}>
            <View style={styles.View_I36_3166_24_228}>
              <Text style={styles.Text_I36_3166_24_228}>Join Us</Text>
            </View>
          </View>
          <View style={styles.View_I36_3166_36_752}>
            <Text style={styles.Text_I36_3166_36_752}>rewards</Text>
          </View>
        </View>
        <View style={styles.View_I36_3166_24_229}>
          <View style={styles.View_I36_3166_24_230}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e59d/4ff0/8a5117f7768e02f4994664ee400b164e"
              }}
              style={styles.ImageBackground_I36_3166_24_231}
            />
            <View style={styles.View_I36_3166_24_232}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7302/2c63/1658142a44f000aa59abab1a8bd247ca"
                }}
                style={styles.ImageBackground_I36_3166_24_233}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdd0/191c/f5000d94d8875a55d6fa0c7abe814d55"
              }}
              style={styles.ImageBackground_I36_3166_31_130}
            />
            <View style={styles.View_I36_3166_24_234}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddc3/dfec/5455c8b381e0270fec3b91c2cef70276"
                }}
                style={styles.ImageBackground_I36_3166_24_235}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_36_3167}>
        <View style={styles.View_36_3168}>
          <View style={styles.View_36_3169}>
            <Text style={styles.Text_36_3169}>
              © earthBaby2022. We love our users!
            </Text>
          </View>
          <View style={styles.View_36_3170}>
            <View style={styles.View_36_3171}>
              <Text style={styles.Text_36_3171}>My Account</Text>
            </View>
            <View style={styles.View_36_3172}>
              <Text style={styles.Text_36_3172}>
                Profile My orders Offers History
              </Text>
            </View>
          </View>
          <View style={styles.View_36_3173}>
            <View style={styles.View_36_3174}>
              <Text style={styles.Text_36_3174}>Navigation</Text>
            </View>
            <View style={styles.View_36_3175}>
              <Text style={styles.Text_36_3175}>
                Shop About us Join us Blog
              </Text>
            </View>
          </View>
          <View style={styles.View_36_3176}>
            <View style={styles.View_36_3177}>
              <Text style={styles.Text_36_3177}>Important Links</Text>
            </View>
            <View style={styles.View_36_3178}>
              <Text style={styles.Text_36_3178}>
                Privacy Policy Terms &amp; conditions earth rewards Refer and
                earn
              </Text>
            </View>
          </View>
          <View style={styles.View_36_3179} />
          <View style={styles.View_36_3180}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1171/c308/d73493b8829d2cba16fbc69c598f1430"
              }}
              style={styles.ImageBackground_36_3181}
            />
            <View style={styles.View_36_3182}>
              <View style={styles.View_36_3183}>
                <View style={styles.View_36_3184}>
                  <Text style={styles.Text_36_3184}>earth</Text>
                </View>
                <View style={styles.View_36_3185}>
                  <Text style={styles.Text_36_3185}>tm</Text>
                </View>
                <View style={styles.View_36_3186}>
                  <Text style={styles.Text_36_3186}>baby</Text>
                </View>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb8e/61ca/96e2ad0cede9df0c18caa625dd3c711e"
            }}
            style={styles.ImageBackground_36_3187}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b577/fb17/f1366f7340ec4bae534525f43038b6c7"
            }}
            style={styles.ImageBackground_36_3189}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/017c/1dc3/87318b2bd25a42c24ed23a3b9cfc9dfe"
            }}
            style={styles.ImageBackground_36_3191}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7bc/ab4a/bfa90bb32e591129bc5d52adc16d5379"
            }}
            style={styles.ImageBackground_36_3193}
          />
        </View>
      </View>
      <View style={styles.View_36_3408} />
      <View style={styles.View_36_3409}>
        <View style={styles.View_36_3410} />
      </View>
      <View style={styles.View_36_3411}>
        <Text style={styles.Text_36_3411}>
          A retreat on sustainable living sowed the first seeds for earthBaby.
        </Text>
      </View>
      <View style={styles.View_36_3412} />
      <View style={styles.View_36_3413}>
        <View style={styles.View_36_3415}>
          <Text style={styles.Text_36_3415}>
            Nature in its bounty is literally Food for Skin! This is the premise
            that earthBaby was born from and continues to operate
          </Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea62/09b4/745ed4fcae1c1d89e128a4f7d7cfedba"
        }}
        style={styles.ImageBackground_36_3480}
      />
      <View style={styles.View_40_230} />
      <View style={styles.View_36_3481}>
        <Text style={styles.Text_36_3481}>
          earthBaby offers India’s 1st Ecocert COSMOS NATURAL certified skincare
          range for babies and new moms. We take pride in having a small but
          growing array of Food for New Mothers and Clothing for newborns using
          only Natural-dyes and 100% cotton. All our products come in
          environmentally friendly packaging and offer the convenience of chic,
          reusable tins and jars! So when you take home an earthBaby, you take
          home peace of mind for yourself and the gentlest of care for your
          baby.
        </Text>
      </View>
      <View style={styles.View_40_231}>
        <Text style={styles.Text_40_231}>
          earthBaby offers India’s 1st Ecocert COSMOS NATURAL certified skincare
          range for babies and new moms. We take pride in having a small but
          growing array of Food for New Mothers and Clothing for newborns using
          only Natural-dyes and 100% cotton. All our products come in
          environmentally friendly packaging and offer the convenience of chic,
          reusable tins and jars! So when you take home an earthBaby, you take
          home peace of mind for yourself and the gentlest of care for your
          baby.
        </Text>
      </View>
      <View style={styles.View_36_3482}>
        <View style={styles.View_36_3483}>
          <Text style={styles.Text_36_3483}>
            A retreat on sustainable living sowed the first seeds for earthBaby.
          </Text>
        </View>
      </View>
      <View style={styles.View_40_229} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("528%") },
  View_36_3166: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I36_3166_24_214: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I36_3166_24_215: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    resizeMode: "cover"
  },
  View_I36_3166_24_216: {
    flexGrow: 1,
    width: wp("45%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I36_3166_24_217: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I36_3166_24_218: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I36_3166_24_218: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I36_3166_24_219: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I36_3166_24_220: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I36_3166_24_220: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I36_3166_24_221: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I36_3166_24_222: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I36_3166_24_222: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I36_3166_24_223: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I36_3166_24_224: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I36_3166_24_224: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I36_3166_24_225: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I36_3166_24_226: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I36_3166_24_226: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I36_3166_24_227: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I36_3166_24_228: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I36_3166_24_228: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I36_3166_36_752: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I36_3166_36_752: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I36_3166_24_229: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I36_3166_24_230: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I36_3166_24_231: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_3166_24_232: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I36_3166_24_233: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I36_3166_31_130: {
    width: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%")
  },
  View_I36_3166_24_234: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I36_3166_24_235: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_36_3167: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("480%"),
    backgroundColor: "rgba(122, 158, 129, 1)",
    overflow: "hidden"
  },
  View_36_3168: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(122, 158, 129, 1)",
    overflow: "hidden"
  },
  View_36_3169: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("43%"),
    justifyContent: "flex-start"
  },
  Text_36_3169: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22499999999999998,
    textTransform: "none"
  },
  View_36_3170: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("11%")
  },
  View_36_3171: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_36_3171: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22499999999999998,
    textTransform: "none"
  },
  View_36_3172: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_36_3172: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22499999999999998,
    textTransform: "none"
  },
  View_36_3173: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("11%")
  },
  View_36_3174: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_36_3174: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22499999999999998,
    textTransform: "none"
  },
  View_36_3175: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_36_3175: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22499999999999998,
    textTransform: "none"
  },
  View_36_3176: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("11%")
  },
  View_36_3177: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_36_3177: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22499999999999998,
    textTransform: "none"
  },
  View_36_3178: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_36_3178: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22499999999999998,
    textTransform: "none"
  },
  View_36_3179: {
    width: wp("106%"),
    minWidth: wp("106%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("40%"),
    backgroundColor: "rgba(234, 234, 234, 1)",
    opacity: 0.5
  },
  View_36_3180: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("7%")
  },
  ImageBackground_36_3181: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_36_3182: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%")
  },
  View_36_3183: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_36_3184: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_36_3184: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 25.60124397277832,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.790031099319458,
    textTransform: "none"
  },
  View_36_3185: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_36_3185: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7.1093034744262695,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.22773258686065675,
    textTransform: "none"
  },
  View_36_3186: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_36_3186: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13.820873260498047,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9801480293273925,
    textTransform: "none"
  },
  ImageBackground_36_3187: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_36_3189: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_36_3191: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_36_3193: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  View_36_3408: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("405%"),
    backgroundColor: "rgba(148, 148, 148, 1)"
  },
  View_36_3409: {
    width: wp("102%"),
    minWidth: wp("102%"),
    height: hp("70%"),
    minHeight: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("17%")
  },
  View_36_3410: {
    width: wp("102%"),
    height: hp("70%"),
    minHeight: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(122, 158, 129, 1)"
  },
  View_36_3411: {
    width: wp("57%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("42%"),
    justifyContent: "center"
  },
  Text_36_3411: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_3412: {
    width: wp("38%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("63%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_3413: {
    width: wp("38%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("63%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_3415: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_36_3415: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_36_3480: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("78%"),
    minHeight: hp("78%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("104%")
  },
  View_40_230: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("71%"),
    minHeight: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("282%"),
    backgroundColor: "rgba(122, 158, 129, 1)"
  },
  View_36_3481: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("127%"),
    justifyContent: "center"
  },
  Text_36_3481: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_231: {
    width: wp("66%"),
    minWidth: wp("66%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("353%"),
    justifyContent: "center"
  },
  Text_40_231: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_36_3482: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("109%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_3483: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_36_3483: {
    color: "rgba(109, 109, 109, 1)",
    fontSize: 29,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_229: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("62%"),
    minHeight: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("198%"),
    backgroundColor: "rgba(122, 158, 129, 1)"
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
