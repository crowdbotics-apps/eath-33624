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
      <View style={styles.View_40_162}>
        <View style={styles.View_I40_162_24_214}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61ea/76ba/03b94211a165fbdb93a9511350f3320c"
            }}
            style={styles.ImageBackground_I40_162_24_215}
          />
        </View>
        <View style={styles.View_I40_162_24_216}>
          <View style={styles.View_I40_162_24_217}>
            <View style={styles.View_I40_162_24_218}>
              <Text style={styles.Text_I40_162_24_218}>Home</Text>
            </View>
          </View>
          <View style={styles.View_I40_162_24_219}>
            <View style={styles.View_I40_162_24_220}>
              <Text style={styles.Text_I40_162_24_220}>Shop</Text>
            </View>
          </View>
          <View style={styles.View_I40_162_24_221}>
            <View style={styles.View_I40_162_24_222}>
              <Text style={styles.Text_I40_162_24_222}>About us</Text>
            </View>
          </View>
          <View style={styles.View_I40_162_24_223}>
            <View style={styles.View_I40_162_24_224}>
              <Text style={styles.Text_I40_162_24_224}>Contact</Text>
            </View>
          </View>
          <View style={styles.View_I40_162_24_225}>
            <View style={styles.View_I40_162_24_226}>
              <Text style={styles.Text_I40_162_24_226}>Blog</Text>
            </View>
          </View>
          <View style={styles.View_I40_162_24_227}>
            <View style={styles.View_I40_162_24_228}>
              <Text style={styles.Text_I40_162_24_228}>Join Us</Text>
            </View>
          </View>
          <View style={styles.View_I40_162_36_752}>
            <Text style={styles.Text_I40_162_36_752}>rewards</Text>
          </View>
        </View>
        <View style={styles.View_I40_162_24_229}>
          <View style={styles.View_I40_162_24_230}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e59d/4ff0/8a5117f7768e02f4994664ee400b164e"
              }}
              style={styles.ImageBackground_I40_162_24_231}
            />
            <View style={styles.View_I40_162_24_232}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9168/acf7/65e079ff1ea2e4b31eeaeade15af2be9"
                }}
                style={styles.ImageBackground_I40_162_24_233}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdd0/191c/f5000d94d8875a55d6fa0c7abe814d55"
              }}
              style={styles.ImageBackground_I40_162_31_130}
            />
            <View style={styles.View_I40_162_24_234}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bac/0d1f/5ea0986aa1cc46a43d10b672f87a3782"
                }}
                style={styles.ImageBackground_I40_162_24_235}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_40_163}>
        <View style={styles.View_40_164}>
          <View style={styles.View_40_165}>
            <Text style={styles.Text_40_165}>
              © earthBaby2022. We love our users!
            </Text>
          </View>
          <View style={styles.View_40_166}>
            <View style={styles.View_40_167}>
              <Text style={styles.Text_40_167}>My Account</Text>
            </View>
            <View style={styles.View_40_168}>
              <Text style={styles.Text_40_168}>
                Profile My orders Offers History
              </Text>
            </View>
          </View>
          <View style={styles.View_40_169}>
            <View style={styles.View_40_170}>
              <Text style={styles.Text_40_170}>Navigation</Text>
            </View>
            <View style={styles.View_40_171}>
              <Text style={styles.Text_40_171}>Shop About us Join us Blog</Text>
            </View>
          </View>
          <View style={styles.View_40_172}>
            <View style={styles.View_40_173}>
              <Text style={styles.Text_40_173}>Important Links</Text>
            </View>
            <View style={styles.View_40_174}>
              <Text style={styles.Text_40_174}>
                Privacy Policy Terms &amp; conditions earth rewards Refer and
                earn
              </Text>
            </View>
          </View>
          <View style={styles.View_40_175} />
          <View style={styles.View_40_176}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1171/c308/d73493b8829d2cba16fbc69c598f1430"
              }}
              style={styles.ImageBackground_40_177}
            />
            <View style={styles.View_40_178}>
              <View style={styles.View_40_179}>
                <View style={styles.View_40_180}>
                  <Text style={styles.Text_40_180}>earth</Text>
                </View>
                <View style={styles.View_40_181}>
                  <Text style={styles.Text_40_181}>tm</Text>
                </View>
                <View style={styles.View_40_182}>
                  <Text style={styles.Text_40_182}>baby</Text>
                </View>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb8e/61ca/96e2ad0cede9df0c18caa625dd3c711e"
            }}
            style={styles.ImageBackground_40_183}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b577/fb17/f1366f7340ec4bae534525f43038b6c7"
            }}
            style={styles.ImageBackground_40_185}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/017c/1dc3/87318b2bd25a42c24ed23a3b9cfc9dfe"
            }}
            style={styles.ImageBackground_40_187}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7bc/ab4a/bfa90bb32e591129bc5d52adc16d5379"
            }}
            style={styles.ImageBackground_40_189}
          />
        </View>
      </View>
      <View style={styles.View_40_191} />
      <View style={styles.View_40_192}>
        <View style={styles.View_40_193} />
      </View>
      <View style={styles.View_40_194}>
        <Text style={styles.Text_40_194}>Blog</Text>
      </View>
      <View style={styles.View_40_195} />
      <View style={styles.View_40_196} />
      <View style={styles.View_40_197}>
        <Text style={styles.Text_40_197}>
          Nature in its bounty is literally Food for Skin! This is the premise
          that earthBaby was born from and continues to operate
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea62/09b4/745ed4fcae1c1d89e128a4f7d7cfedba"
        }}
        style={styles.ImageBackground_40_198}
      />
      <View style={styles.View_40_199}>
        <Text style={styles.Text_40_199}>
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
      <View style={styles.View_40_200}>
        <View style={styles.View_40_201}>
          <Text style={styles.Text_40_201}>
            A retreat on sustainable living sowed the first seeds for earthBaby.
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("286%") },
  View_40_162: {
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
  View_I40_162_24_214: {
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
  ImageBackground_I40_162_24_215: {
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
  View_I40_162_24_216: {
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
  View_I40_162_24_217: {
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
  View_I40_162_24_218: {
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
  Text_I40_162_24_218: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I40_162_24_219: {
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
  View_I40_162_24_220: {
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
  Text_I40_162_24_220: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I40_162_24_221: {
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
  View_I40_162_24_222: {
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
  Text_I40_162_24_222: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I40_162_24_223: {
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
  View_I40_162_24_224: {
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
  Text_I40_162_24_224: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I40_162_24_225: {
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
  View_I40_162_24_226: {
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
  Text_I40_162_24_226: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I40_162_24_227: {
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
  View_I40_162_24_228: {
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
  Text_I40_162_24_228: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I40_162_36_752: {
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
  Text_I40_162_36_752: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I40_162_24_229: {
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
  View_I40_162_24_230: {
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
  ImageBackground_I40_162_24_231: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I40_162_24_232: {
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
  ImageBackground_I40_162_24_233: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I40_162_31_130: {
    width: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%")
  },
  View_I40_162_24_234: {
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
  ImageBackground_I40_162_24_235: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_40_163: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("237%"),
    backgroundColor: "rgba(122, 158, 129, 1)",
    overflow: "hidden"
  },
  View_40_164: {
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
  View_40_165: {
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
  Text_40_165: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22499999999999998,
    textTransform: "none"
  },
  View_40_166: {
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
  View_40_167: {
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
  Text_40_167: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22499999999999998,
    textTransform: "none"
  },
  View_40_168: {
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
  Text_40_168: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22499999999999998,
    textTransform: "none"
  },
  View_40_169: {
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
  View_40_170: {
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
  Text_40_170: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22499999999999998,
    textTransform: "none"
  },
  View_40_171: {
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
  Text_40_171: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22499999999999998,
    textTransform: "none"
  },
  View_40_172: {
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
  View_40_173: {
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
  Text_40_173: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22499999999999998,
    textTransform: "none"
  },
  View_40_174: {
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
  Text_40_174: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22499999999999998,
    textTransform: "none"
  },
  View_40_175: {
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
  View_40_176: {
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
  ImageBackground_40_177: {
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
  View_40_178: {
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
  View_40_179: {
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
  View_40_180: {
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
  Text_40_180: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 25.60124397277832,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.790031099319458,
    textTransform: "none"
  },
  View_40_181: {
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
  Text_40_181: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7.1093034744262695,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.22773258686065675,
    textTransform: "none"
  },
  View_40_182: {
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
  Text_40_182: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13.820873260498047,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9801480293273925,
    textTransform: "none"
  },
  ImageBackground_40_183: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_40_185: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_40_187: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_40_189: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  View_40_191: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("198%"),
    backgroundColor: "rgba(148, 148, 148, 1)"
  },
  View_40_192: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%")
  },
  View_40_193: {
    width: wp("100%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(122, 158, 129, 1)"
  },
  View_40_194: {
    width: wp("100%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25%"),
    justifyContent: "center"
  },
  Text_40_194: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_40_195: {
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
  View_40_196: {
    width: wp("38%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("52%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_40_197: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("46%"),
    justifyContent: "center"
  },
  Text_40_197: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_40_198: {
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
  View_40_199: {
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
  Text_40_199: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_200: {
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
  View_40_201: {
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
  Text_40_201: {
    color: "rgba(109, 109, 109, 1)",
    fontSize: 29,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
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
