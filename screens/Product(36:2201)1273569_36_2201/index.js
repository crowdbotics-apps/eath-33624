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
      <View style={styles.View_36_2202}>
        <View style={styles.View_I36_2202_24_214}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4175/c20b/f466b42035b83423a3d3cce0a29665fc"
            }}
            style={styles.ImageBackground_I36_2202_24_215}
          />
        </View>
        <View style={styles.View_I36_2202_24_216}>
          <View style={styles.View_I36_2202_24_217}>
            <View style={styles.View_I36_2202_24_218}>
              <Text style={styles.Text_I36_2202_24_218}>Home</Text>
            </View>
          </View>
          <View style={styles.View_I36_2202_24_219}>
            <View style={styles.View_I36_2202_24_220}>
              <Text style={styles.Text_I36_2202_24_220}>Shop</Text>
            </View>
          </View>
          <View style={styles.View_I36_2202_24_221}>
            <View style={styles.View_I36_2202_24_222}>
              <Text style={styles.Text_I36_2202_24_222}>About us</Text>
            </View>
          </View>
          <View style={styles.View_I36_2202_24_223}>
            <View style={styles.View_I36_2202_24_224}>
              <Text style={styles.Text_I36_2202_24_224}>Contact</Text>
            </View>
          </View>
          <View style={styles.View_I36_2202_24_225}>
            <View style={styles.View_I36_2202_24_226}>
              <Text style={styles.Text_I36_2202_24_226}>Blog</Text>
            </View>
          </View>
          <View style={styles.View_I36_2202_24_227}>
            <View style={styles.View_I36_2202_24_228}>
              <Text style={styles.Text_I36_2202_24_228}>Join Us</Text>
            </View>
          </View>
          <View style={styles.View_I36_2202_36_752}>
            <Text style={styles.Text_I36_2202_36_752}>rewards</Text>
          </View>
        </View>
        <View style={styles.View_I36_2202_24_229}>
          <View style={styles.View_I36_2202_24_230}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e59d/4ff0/8a5117f7768e02f4994664ee400b164e"
              }}
              style={styles.ImageBackground_I36_2202_24_231}
            />
            <View style={styles.View_I36_2202_24_232}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7302/2c63/1658142a44f000aa59abab1a8bd247ca"
                }}
                style={styles.ImageBackground_I36_2202_24_233}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdd0/191c/f5000d94d8875a55d6fa0c7abe814d55"
              }}
              style={styles.ImageBackground_I36_2202_31_130}
            />
            <View style={styles.View_I36_2202_24_234}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddc3/dfec/5455c8b381e0270fec3b91c2cef70276"
                }}
                style={styles.ImageBackground_I36_2202_24_235}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_36_2203}>
        <View style={styles.View_36_2204}>
          <View style={styles.View_36_2205}>
            <Text style={styles.Text_36_2205}>
              © earthBaby2022. We love our users!
            </Text>
          </View>
          <View style={styles.View_36_2206}>
            <View style={styles.View_36_2207}>
              <Text style={styles.Text_36_2207}>My Account</Text>
            </View>
            <View style={styles.View_36_2208}>
              <Text style={styles.Text_36_2208}>
                Profile My orders Offers History
              </Text>
            </View>
          </View>
          <View style={styles.View_36_2209}>
            <View style={styles.View_36_2210}>
              <Text style={styles.Text_36_2210}>Navigation</Text>
            </View>
            <View style={styles.View_36_2211}>
              <Text style={styles.Text_36_2211}>
                Shop About us Join us Blog
              </Text>
            </View>
          </View>
          <View style={styles.View_36_2212}>
            <View style={styles.View_36_2213}>
              <Text style={styles.Text_36_2213}>Important Links</Text>
            </View>
            <View style={styles.View_36_2214}>
              <Text style={styles.Text_36_2214}>
                Privacy Policy Terms &amp; conditions earth rewards Refer and
                earn
              </Text>
            </View>
          </View>
          <View style={styles.View_36_2215} />
          <View style={styles.View_36_2216}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1171/c308/d73493b8829d2cba16fbc69c598f1430"
              }}
              style={styles.ImageBackground_36_2217}
            />
            <View style={styles.View_36_2218}>
              <View style={styles.View_36_2219}>
                <View style={styles.View_36_2220}>
                  <Text style={styles.Text_36_2220}>earth</Text>
                </View>
                <View style={styles.View_36_2221}>
                  <Text style={styles.Text_36_2221}>tm</Text>
                </View>
                <View style={styles.View_36_2222}>
                  <Text style={styles.Text_36_2222}>baby</Text>
                </View>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb8e/61ca/96e2ad0cede9df0c18caa625dd3c711e"
            }}
            style={styles.ImageBackground_36_2223}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b577/fb17/f1366f7340ec4bae534525f43038b6c7"
            }}
            style={styles.ImageBackground_36_2225}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/017c/1dc3/87318b2bd25a42c24ed23a3b9cfc9dfe"
            }}
            style={styles.ImageBackground_36_2227}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7bc/ab4a/bfa90bb32e591129bc5d52adc16d5379"
            }}
            style={styles.ImageBackground_36_2229}
          />
        </View>
      </View>
      <View style={styles.View_36_2231} />
      <View style={styles.View_36_3051}>
        <View style={styles.View_36_3052}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b159/dddc/a14c5d65491b3c307f07c7790bb42485"
            }}
            style={styles.ImageBackground_36_3053}
          />
          <View style={styles.View_36_3055}>
            <View style={styles.View_36_3056}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e25/752d/e750f4552b17a0f6bca264a33b501009"
                }}
                style={styles.ImageBackground_36_3057}
              />
            </View>
            <View style={styles.View_36_3058}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_36_3059}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1996/db39/077be690b98d87db05ec31d31fea1ad0"
                }}
                style={styles.ImageBackground_36_3061}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1996/db39/077be690b98d87db05ec31d31fea1ad0"
                }}
                style={styles.ImageBackground_36_3063}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_36_3065}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f36/324a/2ee4f992e62277dab3bd703220673b53"
                }}
                style={styles.ImageBackground_36_3067}
              />
            </View>
            <View style={styles.View_36_3069}>
              <View style={styles.View_36_3070}>
                <Text style={styles.Text_36_3070}>
                  Nappy Rash Protection Oil
                </Text>
              </View>
            </View>
            <View style={styles.View_36_3071}>
              <View style={styles.View_36_3072}>
                <Text style={styles.Text_36_3072}>
                  99.9% Certified Natural Origin
                </Text>
              </View>
            </View>
            <View style={styles.View_36_3073}>
              <View style={styles.View_36_3074}>
                <Text style={styles.Text_36_3074}>₹320.00 - ₹800.00</Text>
              </View>
            </View>
            <View style={styles.View_36_3075}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf9f/596a/bdeb5907a848437fcc8f52ab5348c576"
                }}
                style={styles.ImageBackground_36_3076}
              />
              <View style={styles.View_36_3077}>
                <Text style={styles.Text_36_3077}>add to cart</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_36_3078}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b159/dddc/a14c5d65491b3c307f07c7790bb42485"
            }}
            style={styles.ImageBackground_36_3079}
          />
          <View style={styles.View_36_3081}>
            <View style={styles.View_36_3082}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb4c/f10a/5eb05cb38ad69530e94898573af63be4"
                }}
                style={styles.ImageBackground_36_3083}
              />
            </View>
            <View style={styles.View_36_3084}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_36_3085}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1996/db39/077be690b98d87db05ec31d31fea1ad0"
                }}
                style={styles.ImageBackground_36_3087}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1996/db39/077be690b98d87db05ec31d31fea1ad0"
                }}
                style={styles.ImageBackground_36_3089}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_36_3091}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f36/324a/2ee4f992e62277dab3bd703220673b53"
                }}
                style={styles.ImageBackground_36_3093}
              />
            </View>
            <View style={styles.View_36_3095}>
              <View style={styles.View_36_3096}>
                <Text style={styles.Text_36_3096}>
                  Ubtan Sunni Pindi Bath Powder
                </Text>
              </View>
            </View>
            <View style={styles.View_36_3097}>
              <View style={styles.View_36_3098}>
                <Text style={styles.Text_36_3098}>
                  100% certified natural origin
                </Text>
              </View>
            </View>
            <View style={styles.View_36_3099}>
              <View style={styles.View_36_3100}>
                <Text style={styles.Text_36_3100}>₹425.00 </Text>
              </View>
            </View>
            <View style={styles.View_36_3101}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf9f/596a/bdeb5907a848437fcc8f52ab5348c576"
                }}
                style={styles.ImageBackground_36_3102}
              />
              <View style={styles.View_36_3103}>
                <Text style={styles.Text_36_3103}>add to cart</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_36_3104}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b159/dddc/a14c5d65491b3c307f07c7790bb42485"
            }}
            style={styles.ImageBackground_36_3105}
          />
          <View style={styles.View_36_3107}>
            <View style={styles.View_36_3108}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36c1/5269/e531b9e4b5738015c9bd7a35e669baff"
                }}
                style={styles.ImageBackground_36_3109}
              />
            </View>
            <View style={styles.View_36_3110}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_36_3111}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1996/db39/077be690b98d87db05ec31d31fea1ad0"
                }}
                style={styles.ImageBackground_36_3113}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1996/db39/077be690b98d87db05ec31d31fea1ad0"
                }}
                style={styles.ImageBackground_36_3115}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_36_3117}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f36/324a/2ee4f992e62277dab3bd703220673b53"
                }}
                style={styles.ImageBackground_36_3119}
              />
            </View>
            <View style={styles.View_36_3121}>
              <View style={styles.View_36_3122}>
                <Text style={styles.Text_36_3122}>
                  Nappy Rash Protection Oil
                </Text>
              </View>
            </View>
            <View style={styles.View_36_3123}>
              <View style={styles.View_36_3124}>
                <Text style={styles.Text_36_3124}>
                  99.9% Certified Natural Origin
                </Text>
              </View>
            </View>
            <View style={styles.View_36_3125}>
              <View style={styles.View_36_3126}>
                <Text style={styles.Text_36_3126}>₹320.00 - ₹800.00</Text>
              </View>
            </View>
            <View style={styles.View_36_3127}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf9f/596a/bdeb5907a848437fcc8f52ab5348c576"
                }}
                style={styles.ImageBackground_36_3128}
              />
              <View style={styles.View_36_3129}>
                <Text style={styles.Text_36_3129}>add to cart</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_36_3130}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b6f/206b/a4464f086d26d5092126f7ae37b0f343"
            }}
            style={styles.ImageBackground_36_3131}
          />
          <View style={styles.View_36_3133}>
            <View style={styles.View_36_3134}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88c5/a54c/291dd46944c622cfd87c851497f0f926"
                }}
                style={styles.ImageBackground_36_3135}
              />
            </View>
            <View style={styles.View_36_3136}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_36_3137}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_36_3139}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_36_3141}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_36_3143}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f36/324a/2ee4f992e62277dab3bd703220673b53"
                }}
                style={styles.ImageBackground_36_3145}
              />
            </View>
            <View style={styles.View_36_3147}>
              <View style={styles.View_36_3148}>
                <Text style={styles.Text_36_3148}>Virgin Coconut Oil</Text>
              </View>
            </View>
            <View style={styles.View_36_3149}>
              <View style={styles.View_36_3150}>
                <Text style={styles.Text_36_3150}>
                  100% Certified Natural Origin
                </Text>
              </View>
            </View>
            <View style={styles.View_36_3151}>
              <View style={styles.View_36_3152}>
                <Text style={styles.Text_36_3152}>₹320.00 - ₹800.00</Text>
              </View>
            </View>
            <View style={styles.View_36_3153}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf9f/596a/bdeb5907a848437fcc8f52ab5348c576"
                }}
                style={styles.ImageBackground_36_3154}
              />
              <View style={styles.View_36_3155}>
                <Text style={styles.Text_36_3155}>add to cart</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_36_3160}>
        <View style={styles.View_36_3161}>
          <Text style={styles.Text_36_3161}>similar products</Text>
        </View>
        <View style={styles.View_36_3162}>
          <View style={styles.View_36_3163}>
            <View style={styles.View_36_3164}>
              <Text style={styles.Text_36_3164}>
                products that might interenst you
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_36_2974}>
        <View style={styles.View_36_2975} />
        <View style={styles.View_36_2976} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5884/d36e/2564c3d1e47fe1ca8f3a52208cb2a66c"
          }}
          style={styles.ImageBackground_36_2977}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42e1/8e28/d33b753c7f00519a39faaa7994644122"
          }}
          style={styles.ImageBackground_36_2978}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8626/ed97/b86a13a13fa0540c3e547aeb721876e8"
          }}
          style={styles.ImageBackground_36_2979}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8626/ed97/b86a13a13fa0540c3e547aeb721876e8"
          }}
          style={styles.ImageBackground_36_2980}
        />
        <View style={styles.View_36_2981}>
          <Text style={styles.Text_36_2981}>
            Handmade Milk &amp; Sandal Soap, for kids 1 year and above, 100g
          </Text>
        </View>
        <View style={styles.View_36_2982}>
          <Text style={styles.Text_36_2982}>Description</Text>
        </View>
        <View style={styles.View_36_2983}>
          <Text style={styles.Text_36_2983}>Reviews</Text>
        </View>
        <View style={styles.View_36_2984}>
          <Text style={styles.Text_36_2984}>Details</Text>
        </View>
        <View style={styles.View_36_2985}>
          <Text style={styles.Text_36_2985}>$$$</Text>
        </View>
        <View style={styles.View_36_2986}>
          <Text style={styles.Text_36_2986}>In stock</Text>
        </View>
        <View style={styles.View_36_2987}>
          <Text style={styles.Text_36_2987}>100 reviews</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dde0/95ee/df8d8805af378d5730839a1b4e3de309"
          }}
          style={styles.ImageBackground_36_2988}
        />
        <View style={styles.View_36_2989}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/368a/a819/a604ab689f37a470fd48891712060c4d"
            }}
            style={styles.ImageBackground_36_2990}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a55a/7166/de664f8953602c0f2e835900a1800fe2"
            }}
            style={styles.ImageBackground_36_2992}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a55a/7166/de664f8953602c0f2e835900a1800fe2"
            }}
            style={styles.ImageBackground_36_2994}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/368a/a819/a604ab689f37a470fd48891712060c4d"
            }}
            style={styles.ImageBackground_36_2996}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d47/1be9/c9504be9afa08bbe5cfbf65ef0cac253"
            }}
            style={styles.ImageBackground_36_2998}
          />
        </View>
        <View style={styles.View_36_3000}>
          <View style={styles.View_36_3001}>
            <View style={styles.View_36_3002}>
              <View style={styles.View_36_3003}>
                <Text style={styles.Text_36_3003}>Quantity</Text>
              </View>
              <View style={styles.View_36_3004} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/042b/230f/e2ad438945fd5ddc215f8e713bf4a501"
                }}
                style={styles.ImageBackground_36_3005}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91e6/21d7/34d5591dd46be24d61775ec94ff2dfd3"
                }}
                style={styles.ImageBackground_36_3007}
              />
              <View style={styles.View_36_3009}>
                <Text style={styles.Text_36_3009}>10</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_36_3010}>
            <View style={styles.View_36_3011}>
              <View style={styles.View_36_3012} />
              <View style={styles.View_36_3013}>
                <View style={styles.View_36_3014}>
                  <Text style={styles.Text_36_3014}>Add to cart</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/281a/b0fe/440137a4b42508d8ab9d2d14438e3fd3"
                  }}
                  style={styles.ImageBackground_36_3015}
                />
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5765/983a/88bf345d4f9f42d71060c77b58d02802"
          }}
          style={styles.ImageBackground_36_3019}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f32/b21a/109c67d431a7fb71a1e1f042d5e262da"
          }}
          style={styles.ImageBackground_36_3024}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f32/b21a/109c67d431a7fb71a1e1f042d5e262da"
          }}
          style={styles.ImageBackground_36_3029}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d78/b30f/f3b82d62dadd52d4227b53230824231d"
          }}
          style={styles.ImageBackground_36_3034}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e45/128b/4bc9e0f65bf4c88480db3abcf8382326"
          }}
          style={styles.ImageBackground_36_3044}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad7a/5f0f/d3ed274474f065461cc5cf4972a8fb09"
          }}
          style={styles.ImageBackground_36_3047}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a32/a206/6c5060acf5538d80610353dddb4ae023"
          }}
          style={styles.ImageBackground_36_3049}
        />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("366%") },
  View_36_2202: {
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
  View_I36_2202_24_214: {
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
  ImageBackground_I36_2202_24_215: {
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
  View_I36_2202_24_216: {
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
  View_I36_2202_24_217: {
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
  View_I36_2202_24_218: {
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
  Text_I36_2202_24_218: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I36_2202_24_219: {
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
  View_I36_2202_24_220: {
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
  Text_I36_2202_24_220: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I36_2202_24_221: {
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
  View_I36_2202_24_222: {
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
  Text_I36_2202_24_222: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I36_2202_24_223: {
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
  View_I36_2202_24_224: {
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
  Text_I36_2202_24_224: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I36_2202_24_225: {
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
  View_I36_2202_24_226: {
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
  Text_I36_2202_24_226: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I36_2202_24_227: {
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
  View_I36_2202_24_228: {
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
  Text_I36_2202_24_228: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I36_2202_36_752: {
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
  Text_I36_2202_36_752: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I36_2202_24_229: {
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
  View_I36_2202_24_230: {
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
  ImageBackground_I36_2202_24_231: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2202_24_232: {
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
  ImageBackground_I36_2202_24_233: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I36_2202_31_130: {
    width: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%")
  },
  View_I36_2202_24_234: {
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
  ImageBackground_I36_2202_24_235: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_36_2203: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("318%"),
    backgroundColor: "rgba(122, 158, 129, 1)",
    overflow: "hidden"
  },
  View_36_2204: {
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
  View_36_2205: {
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
  Text_36_2205: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22499999999999998,
    textTransform: "none"
  },
  View_36_2206: {
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
  View_36_2207: {
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
  Text_36_2207: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22499999999999998,
    textTransform: "none"
  },
  View_36_2208: {
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
  Text_36_2208: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22499999999999998,
    textTransform: "none"
  },
  View_36_2209: {
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
  View_36_2210: {
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
  Text_36_2210: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22499999999999998,
    textTransform: "none"
  },
  View_36_2211: {
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
  Text_36_2211: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22499999999999998,
    textTransform: "none"
  },
  View_36_2212: {
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
  View_36_2213: {
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
  Text_36_2213: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22499999999999998,
    textTransform: "none"
  },
  View_36_2214: {
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
  Text_36_2214: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22499999999999998,
    textTransform: "none"
  },
  View_36_2215: {
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
  View_36_2216: {
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
  ImageBackground_36_2217: {
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
  View_36_2218: {
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
  View_36_2219: {
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
  View_36_2220: {
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
  Text_36_2220: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 25.60124397277832,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.790031099319458,
    textTransform: "none"
  },
  View_36_2221: {
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
  Text_36_2221: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7.1093034744262695,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.22773258686065675,
    textTransform: "none"
  },
  View_36_2222: {
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
  Text_36_2222: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13.820873260498047,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9801480293273925,
    textTransform: "none"
  },
  ImageBackground_36_2223: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_36_2225: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_36_2227: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_36_2229: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  View_36_2231: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("275%"),
    backgroundColor: "rgba(148, 148, 148, 1)"
  },
  View_36_3051: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("195%")
  },
  View_36_3052: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_36_3053: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_36_3055: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("56%"),
    minHeight: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_3056: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_36_3057: {
    width: wp("12%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_36_3058: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("36%")
  },
  ImageBackground_36_3059: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_36_3061: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_36_3063: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_36_3065: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_36_3067: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_36_3069: {
    width: wp("18%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_3070: {
    width: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_36_3070: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_3071: {
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_3072: {
    width: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_36_3072: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_3073: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("46%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_3074: {
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_36_3074: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_3075: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("50%"),
    backgroundColor: "rgba(122, 158, 129, 1)"
  },
  ImageBackground_36_3076: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_36_3077: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_36_3077: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_36_3078: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_36_3079: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_36_3081: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("56%"),
    minHeight: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_3082: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_36_3083: {
    width: wp("12%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_36_3084: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("36%")
  },
  ImageBackground_36_3085: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_36_3087: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_36_3089: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_36_3091: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_36_3093: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_36_3095: {
    width: wp("18%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_3096: {
    width: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_36_3096: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_3097: {
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_3098: {
    width: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_36_3098: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_3099: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("46%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_3100: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_36_3100: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_3101: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("50%"),
    backgroundColor: "rgba(122, 158, 129, 1)"
  },
  ImageBackground_36_3102: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_36_3103: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_36_3103: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_36_3104: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_36_3105: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_36_3107: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("56%"),
    minHeight: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_3108: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_36_3109: {
    width: wp("12%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_36_3110: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("36%")
  },
  ImageBackground_36_3111: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_36_3113: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_36_3115: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_36_3117: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_36_3119: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_36_3121: {
    width: wp("18%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_3122: {
    width: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_36_3122: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_3123: {
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_3124: {
    width: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_36_3124: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_3125: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("46%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_3126: {
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_36_3126: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_3127: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("50%"),
    backgroundColor: "rgba(122, 158, 129, 1)"
  },
  ImageBackground_36_3128: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_36_3129: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_36_3129: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_36_3130: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_36_3131: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_36_3133: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("56%"),
    minHeight: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_3134: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_36_3135: {
    width: wp("12%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_36_3136: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("36%")
  },
  ImageBackground_36_3137: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_36_3139: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_36_3141: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_36_3143: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_36_3145: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_36_3147: {
    width: wp("18%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_3148: {
    width: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_36_3148: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_3149: {
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_3150: {
    width: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_36_3150: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_3151: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("46%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_3152: {
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_36_3152: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_3153: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("50%"),
    backgroundColor: "rgba(122, 158, 129, 1)"
  },
  ImageBackground_36_3154: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_36_3155: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_36_3155: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_36_3160: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("171%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_3161: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("-1%"),
    justifyContent: "center"
  },
  Text_36_3161: {
    color: "rgba(109, 109, 109, 1)",
    fontSize: 38,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_36_3162: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_3163: {
    width: wp("42%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_3164: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_36_3164: {
    color: "rgba(148, 148, 148, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_36_2974: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("136%"),
    minHeight: hp("136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("25%")
  },
  View_36_2975: {
    width: wp("13%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("84%"),
    backgroundColor: "rgba(122, 158, 129, 1)"
  },
  View_36_2976: {
    width: wp("76%"),
    height: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("91%"),
    backgroundColor: "rgba(122, 158, 129, 1)"
  },
  ImageBackground_36_2977: {
    width: wp("28%"),
    height: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("1%"),
    resizeMode: "cover"
  },
  ImageBackground_36_2978: {
    width: wp("8%"),
    height: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    resizeMode: "cover",
    borderColor: "rgba(122, 158, 129, 1)",
    borderWidth: 5
  },
  ImageBackground_36_2979: {
    width: wp("8%"),
    height: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25%"),
    resizeMode: "cover",
    borderColor: "rgba(138, 138, 138, 1)",
    borderWidth: 1
  },
  ImageBackground_36_2980: {
    width: wp("8%"),
    height: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("49%"),
    resizeMode: "cover",
    borderColor: "rgba(138, 138, 138, 1)",
    borderWidth: 1
  },
  View_36_2981: {
    width: wp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_36_2981: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_2982: {
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("84%"),
    justifyContent: "center"
  },
  Text_36_2982: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_2983: {
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("84%"),
    justifyContent: "center"
  },
  Text_36_2983: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_2984: {
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("84%"),
    justifyContent: "center"
  },
  Text_36_2984: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_2985: {
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_36_2985: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_2986: {
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_36_2986: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_2987: {
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("20%"),
    justifyContent: "center"
  },
  Text_36_2987: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_36_2988: {
    width: wp("30%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("26%")
  },
  View_36_2989: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("16%")
  },
  ImageBackground_36_2990: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_36_2992: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_36_2994: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_36_2996: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_36_2998: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_36_3000: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("57%")
  },
  View_36_3001: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_36_3002: {
    width: wp("17%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_3003: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_36_3003: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.27,
    textTransform: "none"
  },
  View_36_3004: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_36_3005: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_36_3007: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_36_3009: {
    width: wp("3%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_36_3009: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14137931168079376,
    textTransform: "none"
  },
  View_36_3010: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%")
  },
  View_36_3011: {
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(122, 158, 129, 1)"
  },
  View_36_3012: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_36_3013: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  View_36_3014: {
    width: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_36_3014: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_36_3015: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_36_3019: {
    width: wp("30%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("29%")
  },
  ImageBackground_36_3024: {
    width: wp("67%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("104%")
  },
  ImageBackground_36_3029: {
    width: wp("67%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("115%")
  },
  ImageBackground_36_3034: {
    width: wp("20%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("38%")
  },
  ImageBackground_36_3044: {
    width: wp("4%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("4%")
  },
  ImageBackground_36_3047: {
    width: wp("4%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("55%")
  },
  ImageBackground_36_3049: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
