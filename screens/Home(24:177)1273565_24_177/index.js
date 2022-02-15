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
      <View style={styles.View_27_99} />
      <View style={styles.View_36_733} />
      <View style={styles.View_24_240}>
        <View style={styles.View_I24_240_24_214}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4175/c20b/f466b42035b83423a3d3cce0a29665fc"
            }}
            style={styles.ImageBackground_I24_240_24_215}
          />
        </View>
        <View style={styles.View_I24_240_24_216}>
          <View style={styles.View_I24_240_24_217}>
            <View style={styles.View_I24_240_24_218}>
              <Text style={styles.Text_I24_240_24_218}>Home</Text>
            </View>
          </View>
          <View style={styles.View_I24_240_24_219}>
            <View style={styles.View_I24_240_24_220}>
              <Text style={styles.Text_I24_240_24_220}>Shop</Text>
            </View>
          </View>
          <View style={styles.View_I24_240_24_221}>
            <View style={styles.View_I24_240_24_222}>
              <Text style={styles.Text_I24_240_24_222}>About us</Text>
            </View>
          </View>
          <View style={styles.View_I24_240_24_223}>
            <View style={styles.View_I24_240_24_224}>
              <Text style={styles.Text_I24_240_24_224}>Contact</Text>
            </View>
          </View>
          <View style={styles.View_I24_240_24_225}>
            <View style={styles.View_I24_240_24_226}>
              <Text style={styles.Text_I24_240_24_226}>Blog</Text>
            </View>
          </View>
          <View style={styles.View_I24_240_24_227}>
            <View style={styles.View_I24_240_24_228}>
              <Text style={styles.Text_I24_240_24_228}>Join Us</Text>
            </View>
          </View>
          <View style={styles.View_I24_240_36_752}>
            <Text style={styles.Text_I24_240_36_752}>rewards</Text>
          </View>
        </View>
        <View style={styles.View_I24_240_24_229}>
          <View style={styles.View_I24_240_24_230}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e59d/4ff0/8a5117f7768e02f4994664ee400b164e"
              }}
              style={styles.ImageBackground_I24_240_24_231}
            />
            <View style={styles.View_I24_240_24_232}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7302/2c63/1658142a44f000aa59abab1a8bd247ca"
                }}
                style={styles.ImageBackground_I24_240_24_233}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdd0/191c/f5000d94d8875a55d6fa0c7abe814d55"
              }}
              style={styles.ImageBackground_I24_240_31_130}
            />
            <View style={styles.View_I24_240_24_234}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddc3/dfec/5455c8b381e0270fec3b91c2cef70276"
                }}
                style={styles.ImageBackground_I24_240_24_235}
              />
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc6/eea2/31ae469cdd433442a5a003c7d65429b4"
        }}
        style={styles.ImageBackground_27_67}
      />
      <View style={styles.View_33_518}>
        <View style={styles.View_33_519}>
          <View style={styles.View_33_634}>
            <View style={styles.View_33_635}>
              <View style={styles.View_33_636}>
                <Text style={styles.Text_33_636}>Try our products</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_33_520}>
            <View style={styles.View_33_521}>
              <Text style={styles.Text_33_521}>
                Goodness of mother nature for you &amp; your baby{" "}
              </Text>
            </View>
          </View>
          <View style={styles.View_33_522}>
            <View style={styles.View_33_523}>
              <View style={styles.View_33_524}>
                <Text style={styles.Text_33_524}>
                  Trusted by thousands of moms across India.{" "}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_33_525}>
          <View style={styles.View_33_526}>
            <View style={styles.View_33_527}>
              <Text style={styles.Text_33_527}>shop now</Text>
            </View>
          </View>
          <View style={styles.View_33_528}>
            <View style={styles.View_33_529}>
              <Text style={styles.Text_33_529}>know more</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_36_734}>
        <View style={styles.View_36_735}>
          <View style={styles.View_36_736}>
            <View style={styles.View_36_737}>
              <View style={styles.View_36_738}>
                <Text style={styles.Text_36_738}>Try our products</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_36_739}>
            <View style={styles.View_36_740}>
              <Text style={styles.Text_36_740}>
                Choose any four samples for your try me box
              </Text>
            </View>
          </View>
          <View style={styles.View_36_741}>
            <View style={styles.View_36_742}>
              <View style={styles.View_36_743}>
                <Text style={styles.Text_36_743}>
                  Special shipping @ Rs.150 shall apply
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_36_744}>
          <View style={styles.View_36_745}>
            <View style={styles.View_36_746}>
              <Text style={styles.Text_36_746}>get free samples</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_36_705}>
        <Text style={styles.Text_36_705}>
          The sandalwood soap smells just amazing and I&#39;m glad it has no
          chemicals in it cos Sappho loves trying to bite into it! I also am
          loving the After-sun cream that leaves his skin soft after a day out
          in the sun. I&#39;m using earthBaby shampoo on Sappho too, It&#39;s
          great. I love that the shampoo is parabens and sulfates free and
          Sappho loves that its tear free.
        </Text>
      </View>
      <View style={styles.View_36_706}>
        <Text style={styles.Text_36_706}>Kalki Koechlin</Text>
      </View>
      <View style={styles.View_36_720}>
        <Text style={styles.Text_36_720}>Indian Actress</Text>
      </View>
      <View style={styles.View_30_102}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3253/bd23/c4352bb3a4abfcbe2a1076f060f41966"
          }}
          style={styles.ImageBackground_27_82}
        />
        <View style={styles.View_27_87} />
        <View style={styles.View_27_88} />
        <View style={styles.View_27_89} />
      </View>
      <View style={styles.View_33_516}>
        <View style={styles.View_33_517}>
          <Text style={styles.Text_33_517}>Best Sellers</Text>
        </View>
      </View>
      <View style={styles.View_30_112}>
        <View style={styles.View_30_105}>
          <View style={styles.View_30_107}>
            <Text style={styles.Text_30_107}>Skincare</Text>
          </View>
        </View>
        <View style={styles.View_30_108}>
          <View style={styles.View_30_109}>
            <Text style={styles.Text_30_109}>Clothing</Text>
          </View>
        </View>
        <View style={styles.View_30_110}>
          <View style={styles.View_30_111}>
            <Text style={styles.Text_30_111}>Nourishment</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_31_268}>
        <View style={styles.View_31_269}>
          <Text style={styles.Text_31_269}>See all products</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54cb/8d33/4e4d11b9fd994443aa7395e301bfdf3c"
          }}
          style={styles.ImageBackground_31_279}
        />
      </View>
      <View style={styles.View_36_1655}>
        <View style={styles.View_31_401}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b159/dddc/a14c5d65491b3c307f07c7790bb42485"
            }}
            style={styles.ImageBackground_31_402}
          />
          <View style={styles.View_31_404}>
            <View style={styles.View_31_405}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e25/752d/e750f4552b17a0f6bca264a33b501009"
                }}
                style={styles.ImageBackground_31_406}
              />
            </View>
            <View style={styles.View_33_505}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_33_506}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_33_508}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_33_510}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_33_512}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f36/324a/2ee4f992e62277dab3bd703220673b53"
                }}
                style={styles.ImageBackground_33_514}
              />
            </View>
            <View style={styles.View_31_407}>
              <View style={styles.View_31_408}>
                <Text style={styles.Text_31_408}>
                  Nappy Rash Protection Oil
                </Text>
              </View>
            </View>
            <View style={styles.View_31_409}>
              <View style={styles.View_31_410}>
                <Text style={styles.Text_31_410}>
                  99.9% Certified Natural Origin
                </Text>
              </View>
            </View>
            <View style={styles.View_31_411}>
              <View style={styles.View_31_412}>
                <Text style={styles.Text_31_412}>₹320.00 - ₹800.00</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_31_413}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b159/dddc/a14c5d65491b3c307f07c7790bb42485"
            }}
            style={styles.ImageBackground_31_414}
          />
          <View style={styles.View_31_416}>
            <View style={styles.View_31_417}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb4c/f10a/5eb05cb38ad69530e94898573af63be4"
                }}
                style={styles.ImageBackground_31_333}
              />
            </View>
            <View style={styles.View_33_483}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_33_484}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_33_486}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_33_488}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_33_490}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f36/324a/2ee4f992e62277dab3bd703220673b53"
                }}
                style={styles.ImageBackground_33_492}
              />
            </View>
            <View style={styles.View_31_419}>
              <View style={styles.View_31_420}>
                <Text style={styles.Text_31_420}>
                  Ubtan Sunni Pindi Bath Powder
                </Text>
              </View>
            </View>
            <View style={styles.View_31_421}>
              <View style={styles.View_31_422}>
                <Text style={styles.Text_31_422}>
                  100% certified natural origin
                </Text>
              </View>
            </View>
            <View style={styles.View_31_423}>
              <View style={styles.View_31_424}>
                <Text style={styles.Text_31_424}>₹425.00 </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_31_425}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b159/dddc/a14c5d65491b3c307f07c7790bb42485"
            }}
            style={styles.ImageBackground_31_426}
          />
          <View style={styles.View_31_428}>
            <View style={styles.View_31_429}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36c1/5269/e531b9e4b5738015c9bd7a35e669baff"
                }}
                style={styles.ImageBackground_31_369}
              />
            </View>
            <View style={styles.View_33_472}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_33_473}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_33_475}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_33_477}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_33_479}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f36/324a/2ee4f992e62277dab3bd703220673b53"
                }}
                style={styles.ImageBackground_33_481}
              />
            </View>
            <View style={styles.View_31_431}>
              <View style={styles.View_31_432}>
                <Text style={styles.Text_31_432}>
                  Nappy Rash Protection Oil
                </Text>
              </View>
            </View>
            <View style={styles.View_31_433}>
              <View style={styles.View_31_434}>
                <Text style={styles.Text_31_434}>
                  99.9% Certified Natural Origin
                </Text>
              </View>
            </View>
            <View style={styles.View_31_435}>
              <View style={styles.View_31_436}>
                <Text style={styles.Text_31_436}>₹320.00 - ₹800.00</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_31_437}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b6f/206b/a4464f086d26d5092126f7ae37b0f343"
            }}
            style={styles.ImageBackground_31_438}
          />
          <View style={styles.View_31_440}>
            <View style={styles.View_31_441}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88c5/a54c/291dd46944c622cfd87c851497f0f926"
                }}
                style={styles.ImageBackground_31_450}
              />
            </View>
            <View style={styles.View_33_494}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_33_495}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_33_497}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_33_499}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_33_501}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f36/324a/2ee4f992e62277dab3bd703220673b53"
                }}
                style={styles.ImageBackground_33_503}
              />
            </View>
            <View style={styles.View_31_443}>
              <View style={styles.View_31_344}>
                <Text style={styles.Text_31_344}>Virgin Coconut Oil</Text>
              </View>
            </View>
            <View style={styles.View_31_345}>
              <View style={styles.View_31_346}>
                <Text style={styles.Text_31_346}>
                  100% Certified Natural Origin
                </Text>
              </View>
            </View>
            <View style={styles.View_31_347}>
              <View style={styles.View_31_348}>
                <Text style={styles.Text_31_348}>₹320.00 - ₹800.00</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b472/d94a/71168760134c573c918cdd4403da0d1d"
        }}
        style={styles.ImageBackground_35_652}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c801/64f5/aa384a85cd5e7ecb7aac77f093375949"
        }}
        style={styles.ImageBackground_35_655}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1333/c633/160a6eda79040f4bf298de7399577b9a"
        }}
        style={styles.ImageBackground_36_690}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82f6/f9d0/f6d8ad03b05a469544c842bee5999c7e"
        }}
        style={styles.ImageBackground_36_697}
      />
      <View style={styles.View_36_726}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5db/a707/ff84776aad073094ca5b7ddad25a489c"
          }}
          style={styles.ImageBackground_36_727}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b47/f6ce/3cce03c554bba12196d824999eca85da"
          }}
          style={styles.ImageBackground_36_729}
        />
      </View>
      <View style={styles.View_33_530}>
        <View style={styles.View_33_531}>
          <Text style={styles.Text_33_531}>Gift Hampers</Text>
        </View>
        <View style={styles.View_33_637}>
          <View style={styles.View_33_638}>
            <View style={styles.View_33_639}>
              <Text style={styles.Text_33_639}>
                celebrate the joy of motherhood with our gift hampers
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_33_642}>
        <View style={styles.View_33_542}>
          <View style={styles.View_33_545}>
            <View style={styles.View_33_546}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e894/b9bd/3c9f549a0104de03083dee84a65a03bf"
                }}
                style={styles.ImageBackground_33_547}
              />
            </View>
            <View style={styles.View_33_548}>
              <View style={styles.View_33_549}>
                <Text style={styles.Text_33_549}>Mother’s gift hamper</Text>
              </View>
            </View>
            <View style={styles.View_33_550}>
              <View style={styles.View_33_551}>
                <Text style={styles.Text_33_551}>
                  99.9% Certified Natural Origin
                </Text>
              </View>
            </View>
            <View style={styles.View_33_552}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_33_553}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_33_555}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_33_557}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_33_559}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f36/324a/2ee4f992e62277dab3bd703220673b53"
                }}
                style={styles.ImageBackground_33_561}
              />
            </View>
            <View style={styles.View_33_563}>
              <View style={styles.View_33_564}>
                <Text style={styles.Text_33_564}>₹320.00 - ₹800.00</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_33_565}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11a4/d537/ae1ad65ad20c0d79b844f5d5a2c3b39e"
            }}
            style={styles.ImageBackground_33_566}
          />
          <View style={styles.View_33_568}>
            <View style={styles.View_33_569}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8bc7/dd1e/dbd5f33b64e7061fafeeb847a6795c8f"
                }}
                style={styles.ImageBackground_33_570}
              />
            </View>
            <View style={styles.View_33_571}>
              <View style={styles.View_33_572}>
                <Text style={styles.Text_33_572}>Baby Shampoo hamper</Text>
              </View>
            </View>
            <View style={styles.View_33_573}>
              <View style={styles.View_33_574}>
                <Text style={styles.Text_33_574}>
                  100% certified natural origin
                </Text>
              </View>
            </View>
            <View style={styles.View_33_575}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_33_576}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_33_578}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_33_580}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_33_582}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f36/324a/2ee4f992e62277dab3bd703220673b53"
                }}
                style={styles.ImageBackground_33_584}
              />
            </View>
            <View style={styles.View_33_586}>
              <View style={styles.View_33_587}>
                <Text style={styles.Text_33_587}>₹425.00 </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_33_588}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11a4/d537/ae1ad65ad20c0d79b844f5d5a2c3b39e"
            }}
            style={styles.ImageBackground_33_589}
          />
          <View style={styles.View_33_591}>
            <View style={styles.View_33_592}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f67d/8ff2/3bb7f38541802a1bea452f536f34b5aa"
                }}
                style={styles.ImageBackground_33_593}
              />
            </View>
            <View style={styles.View_33_594}>
              <View style={styles.View_33_595}>
                <Text style={styles.Text_33_595}>Baby skincare hamper</Text>
              </View>
            </View>
            <View style={styles.View_33_596}>
              <View style={styles.View_33_597}>
                <Text style={styles.Text_33_597}>
                  99.9% Certified Natural Origin
                </Text>
              </View>
            </View>
            <View style={styles.View_33_598}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_33_599}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_33_601}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_33_603}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_33_605}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f36/324a/2ee4f992e62277dab3bd703220673b53"
                }}
                style={styles.ImageBackground_33_607}
              />
            </View>
            <View style={styles.View_33_609}>
              <View style={styles.View_33_610}>
                <Text style={styles.Text_33_610}>₹320.00 - ₹800.00</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_33_611}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11a4/d537/ae1ad65ad20c0d79b844f5d5a2c3b39e"
            }}
            style={styles.ImageBackground_33_612}
          />
          <View style={styles.View_33_614}>
            <View style={styles.View_33_615}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1432/ee3a/6e26877a847357b5cd29709fb7a19491"
                }}
                style={styles.ImageBackground_33_616}
              />
            </View>
            <View style={styles.View_33_617}>
              <View style={styles.View_33_618}>
                <Text style={styles.Text_33_618}>Special skincare hamper</Text>
              </View>
            </View>
            <View style={styles.View_33_619}>
              <View style={styles.View_33_620}>
                <Text style={styles.Text_33_620}>
                  100% Certified Natural Origin
                </Text>
              </View>
            </View>
            <View style={styles.View_33_621}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_33_622}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_33_624}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_33_626}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_33_628}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f36/324a/2ee4f992e62277dab3bd703220673b53"
                }}
                style={styles.ImageBackground_33_630}
              />
            </View>
            <View style={styles.View_33_632}>
              <View style={styles.View_33_633}>
                <Text style={styles.Text_33_633}>₹320.00 - ₹800.00</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ad3/0ab2/3c4b55df4ad965d45126cd912ea21cf6"
        }}
        style={styles.ImageBackground_36_749}
      />
      <View style={styles.View_36_878}>
        <View style={styles.View_36_879}>
          <View style={styles.View_36_883}>
            <Text style={styles.Text_36_883}>
              © earthBaby2022. We love our users!
            </Text>
          </View>
          <View style={styles.View_36_888}>
            <View style={styles.View_36_889}>
              <Text style={styles.Text_36_889}>My Account</Text>
            </View>
            <View style={styles.View_36_890}>
              <Text style={styles.Text_36_890}>
                Profile My orders Offers History
              </Text>
            </View>
          </View>
          <View style={styles.View_36_948}>
            <View style={styles.View_36_949}>
              <Text style={styles.Text_36_949}>Navigation</Text>
            </View>
            <View style={styles.View_36_950}>
              <Text style={styles.Text_36_950}>Shop About us Join us Blog</Text>
            </View>
          </View>
          <View style={styles.View_36_951}>
            <View style={styles.View_36_952}>
              <Text style={styles.Text_36_952}>Important Links</Text>
            </View>
            <View style={styles.View_36_953}>
              <Text style={styles.Text_36_953}>
                Privacy Policy Terms &amp; conditions earth rewards Refer and
                earn
              </Text>
            </View>
          </View>
          <View style={styles.View_36_893} />
          <View style={styles.View_36_915}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1171/c308/d73493b8829d2cba16fbc69c598f1430"
              }}
              style={styles.ImageBackground_36_916}
            />
            <View style={styles.View_36_917}>
              <View style={styles.View_36_918}>
                <View style={styles.View_36_919}>
                  <Text style={styles.Text_36_919}>earth</Text>
                </View>
                <View style={styles.View_36_920}>
                  <Text style={styles.Text_36_920}>tm</Text>
                </View>
                <View style={styles.View_36_921}>
                  <Text style={styles.Text_36_921}>baby</Text>
                </View>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb8e/61ca/96e2ad0cede9df0c18caa625dd3c711e"
            }}
            style={styles.ImageBackground_36_940}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b577/fb17/f1366f7340ec4bae534525f43038b6c7"
            }}
            style={styles.ImageBackground_36_942}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/017c/1dc3/87318b2bd25a42c24ed23a3b9cfc9dfe"
            }}
            style={styles.ImageBackground_36_944}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7bc/ab4a/bfa90bb32e591129bc5d52adc16d5379"
            }}
            style={styles.ImageBackground_36_946}
          />
        </View>
      </View>
      <View style={styles.View_36_954} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("700%") },
  View_27_99: {
    width: wp("103%"),
    minWidth: wp("103%"),
    height: hp("62%"),
    minHeight: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("290%"),
    backgroundColor: "rgba(122, 158, 129, 1)"
  },
  View_36_733: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("62%"),
    minHeight: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("447%"),
    backgroundColor: "rgba(122, 158, 129, 1)"
  },
  View_24_240: {
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
  View_I24_240_24_214: {
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
  ImageBackground_I24_240_24_215: {
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
  View_I24_240_24_216: {
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
  View_I24_240_24_217: {
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
  View_I24_240_24_218: {
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
  Text_I24_240_24_218: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I24_240_24_219: {
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
  View_I24_240_24_220: {
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
  Text_I24_240_24_220: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I24_240_24_221: {
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
  View_I24_240_24_222: {
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
  Text_I24_240_24_222: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I24_240_24_223: {
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
  View_I24_240_24_224: {
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
  Text_I24_240_24_224: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I24_240_24_225: {
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
  View_I24_240_24_226: {
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
  Text_I24_240_24_226: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I24_240_24_227: {
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
  View_I24_240_24_228: {
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
  Text_I24_240_24_228: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I24_240_36_752: {
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
  Text_I24_240_36_752: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I24_240_24_229: {
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
  View_I24_240_24_230: {
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
  ImageBackground_I24_240_24_231: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I24_240_24_232: {
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
  ImageBackground_I24_240_24_233: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I24_240_31_130: {
    width: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%")
  },
  View_I24_240_24_234: {
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
  ImageBackground_I24_240_24_235: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_27_67: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("80%"),
    minHeight: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("20%")
  },
  View_33_518: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("302%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_519: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_634: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_635: {
    width: wp("42%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_636: {
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
  Text_33_636: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_33_520: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_521: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_33_521: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 37.55012893676758,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_33_522: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_523: {
    width: wp("42%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_524: {
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
  Text_33_524: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_33_525: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("30%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_526: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_33_527: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_33_527: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_33_528: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_529: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_33_529: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_36_734: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("459%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_735: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_736: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_737: {
    width: wp("42%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_738: {
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
  Text_36_738: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_36_739: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_740: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_36_740: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 37.55012893676758,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_36_741: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_742: {
    width: wp("42%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_743: {
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
  Text_36_743: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_36_744: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("30%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_745: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_36_746: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_36_746: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_36_705: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("390%"),
    justifyContent: "center"
  },
  Text_36_705: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_36_706: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("416%"),
    justifyContent: "center"
  },
  Text_36_706: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_36_720: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("422%"),
    justifyContent: "center"
  },
  Text_36_720: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_102: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("110%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_27_82: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_27_87: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_27_88: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("2%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_27_89: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("2%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_33_516: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("187%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_517: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_33_517: {
    color: "rgba(109, 109, 109, 1)",
    fontSize: 29,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_112: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("200%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_30_105: {
    width: wp("8%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(234, 237, 217, 1)"
  },
  View_30_107: {
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
  Text_30_107: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_108: {
    width: wp("7%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_30_109: {
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
  Text_30_109: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_110: {
    width: wp("10%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_30_111: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_30_111: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_268: {
    width: wp("23%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("272%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_269: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_31_269: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_31_279: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("5%")
  },
  View_36_1655: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("212%")
  },
  View_31_401: {
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
  ImageBackground_31_402: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_31_404: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_405: {
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
  ImageBackground_31_406: {
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
  View_33_505: {
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
  ImageBackground_33_506: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_33_508: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_33_510: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_33_512: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_33_514: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_31_407: {
    width: wp("18%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_408: {
    width: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_31_408: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_31_409: {
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_410: {
    width: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_31_410: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_31_411: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("45%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_412: {
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_31_412: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_31_413: {
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
  ImageBackground_31_414: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_31_416: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_417: {
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
  ImageBackground_31_333: {
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
  View_33_483: {
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
  ImageBackground_33_484: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_33_486: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_33_488: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_33_490: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_33_492: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_31_419: {
    width: wp("18%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_420: {
    width: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_31_420: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_31_421: {
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_422: {
    width: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_31_422: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_31_423: {
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
  View_31_424: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_31_424: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_31_425: {
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
  ImageBackground_31_426: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_31_428: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_429: {
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
  ImageBackground_31_369: {
    width: wp("12%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_33_472: {
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
  ImageBackground_33_473: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_33_475: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_33_477: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_33_479: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_33_481: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_31_431: {
    width: wp("18%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_432: {
    width: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_31_432: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_31_433: {
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_434: {
    width: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_31_434: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_31_435: {
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
  View_31_436: {
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_31_436: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_31_437: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_31_438: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_31_440: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_441: {
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
  ImageBackground_31_450: {
    width: wp("12%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_33_494: {
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
  ImageBackground_33_495: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_33_497: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_33_499: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_33_501: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_33_503: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_31_443: {
    width: wp("18%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_344: {
    width: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_31_344: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_31_345: {
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_346: {
    width: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_31_346: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_31_347: {
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
  View_31_348: {
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_31_348: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_35_652: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("57%"),
    minHeight: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("370%")
  },
  ImageBackground_35_655: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("132%")
  },
  ImageBackground_36_690: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("131%")
  },
  ImageBackground_36_697: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("132%")
  },
  View_36_726: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("399%")
  },
  ImageBackground_36_727: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_36_729: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  View_33_530: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("519%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_531: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_33_531: {
    color: "rgba(109, 109, 109, 1)",
    fontSize: 38,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_33_637: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_638: {
    width: wp("42%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_639: {
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
  Text_33_639: {
    color: "rgba(148, 148, 148, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_33_642: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("539%")
  },
  View_33_542: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_545: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_546: {
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
  ImageBackground_33_547: {
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
  View_33_548: {
    width: wp("18%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_549: {
    width: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_33_549: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_33_550: {
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_551: {
    width: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_33_551: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_33_552: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("44%")
  },
  ImageBackground_33_553: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_33_555: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_33_557: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_33_559: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_33_561: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_33_563: {
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
  View_33_564: {
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_33_564: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_33_565: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_33_566: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_33_568: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_569: {
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
  ImageBackground_33_570: {
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
  View_33_571: {
    width: wp("18%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_572: {
    width: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_33_572: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_33_573: {
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_574: {
    width: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_33_574: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_33_575: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("44%")
  },
  ImageBackground_33_576: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_33_578: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_33_580: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_33_582: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_33_584: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_33_586: {
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
  View_33_587: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_33_587: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_33_588: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_33_589: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_33_591: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_592: {
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
  ImageBackground_33_593: {
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
  View_33_594: {
    width: wp("18%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_595: {
    width: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_33_595: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_33_596: {
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_597: {
    width: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_33_597: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_33_598: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("44%")
  },
  ImageBackground_33_599: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_33_601: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_33_603: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_33_605: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_33_607: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_33_609: {
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
  View_33_610: {
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_33_610: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_33_611: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_33_612: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_33_614: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_615: {
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
  ImageBackground_33_616: {
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
  View_33_617: {
    width: wp("18%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_618: {
    width: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_33_618: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_33_619: {
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_620: {
    width: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_33_620: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_33_621: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("44%")
  },
  ImageBackground_33_622: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_33_624: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_33_626: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_33_628: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_33_630: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_33_632: {
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
  View_33_633: {
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_33_633: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_36_749: {
    width: wp("10%"),
    height: hp("17%"),
    top: hp("370%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  View_36_878: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("652%"),
    backgroundColor: "rgba(122, 158, 129, 1)",
    overflow: "hidden"
  },
  View_36_879: {
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
  View_36_883: {
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
  Text_36_883: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22499999999999998,
    textTransform: "none"
  },
  View_36_888: {
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
  View_36_889: {
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
  Text_36_889: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22499999999999998,
    textTransform: "none"
  },
  View_36_890: {
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
  Text_36_890: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22499999999999998,
    textTransform: "none"
  },
  View_36_948: {
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
  View_36_949: {
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
  Text_36_949: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22499999999999998,
    textTransform: "none"
  },
  View_36_950: {
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
  Text_36_950: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22499999999999998,
    textTransform: "none"
  },
  View_36_951: {
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
  View_36_952: {
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
  Text_36_952: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22499999999999998,
    textTransform: "none"
  },
  View_36_953: {
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
  Text_36_953: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22499999999999998,
    textTransform: "none"
  },
  View_36_893: {
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
  View_36_915: {
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
  ImageBackground_36_916: {
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
  View_36_917: {
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
  View_36_918: {
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
  View_36_919: {
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
  Text_36_919: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 25.60124397277832,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.790031099319458,
    textTransform: "none"
  },
  View_36_920: {
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
  Text_36_920: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7.1093034744262695,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.22773258686065675,
    textTransform: "none"
  },
  View_36_921: {
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
  Text_36_921: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13.820873260498047,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9801480293273925,
    textTransform: "none"
  },
  ImageBackground_36_940: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_36_942: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_36_944: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_36_946: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  View_36_954: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("612%"),
    backgroundColor: "rgba(148, 148, 148, 1)"
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
