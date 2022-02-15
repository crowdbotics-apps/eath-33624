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
      <View style={styles.View_36_972}>
        <View style={styles.View_I36_972_24_214}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4175/c20b/f466b42035b83423a3d3cce0a29665fc"
            }}
            style={styles.ImageBackground_I36_972_24_215}
          />
        </View>
        <View style={styles.View_I36_972_24_216}>
          <View style={styles.View_I36_972_24_217}>
            <View style={styles.View_I36_972_24_218}>
              <Text style={styles.Text_I36_972_24_218}>Home</Text>
            </View>
          </View>
          <View style={styles.View_I36_972_24_219}>
            <View style={styles.View_I36_972_24_220}>
              <Text style={styles.Text_I36_972_24_220}>Shop</Text>
            </View>
          </View>
          <View style={styles.View_I36_972_24_221}>
            <View style={styles.View_I36_972_24_222}>
              <Text style={styles.Text_I36_972_24_222}>About us</Text>
            </View>
          </View>
          <View style={styles.View_I36_972_24_223}>
            <View style={styles.View_I36_972_24_224}>
              <Text style={styles.Text_I36_972_24_224}>Contact</Text>
            </View>
          </View>
          <View style={styles.View_I36_972_24_225}>
            <View style={styles.View_I36_972_24_226}>
              <Text style={styles.Text_I36_972_24_226}>Blog</Text>
            </View>
          </View>
          <View style={styles.View_I36_972_24_227}>
            <View style={styles.View_I36_972_24_228}>
              <Text style={styles.Text_I36_972_24_228}>Join Us</Text>
            </View>
          </View>
          <View style={styles.View_I36_972_36_752}>
            <Text style={styles.Text_I36_972_36_752}>rewards</Text>
          </View>
        </View>
        <View style={styles.View_I36_972_24_229}>
          <View style={styles.View_I36_972_24_230}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e59d/4ff0/8a5117f7768e02f4994664ee400b164e"
              }}
              style={styles.ImageBackground_I36_972_24_231}
            />
            <View style={styles.View_I36_972_24_232}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7302/2c63/1658142a44f000aa59abab1a8bd247ca"
                }}
                style={styles.ImageBackground_I36_972_24_233}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdd0/191c/f5000d94d8875a55d6fa0c7abe814d55"
              }}
              style={styles.ImageBackground_I36_972_31_130}
            />
            <View style={styles.View_I36_972_24_234}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddc3/dfec/5455c8b381e0270fec3b91c2cef70276"
                }}
                style={styles.ImageBackground_I36_972_24_235}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_36_1265}>
        <View style={styles.View_36_1266}>
          <View style={styles.View_36_1267}>
            <Text style={styles.Text_36_1267}>
              © earthBaby2022. We love our users!
            </Text>
          </View>
          <View style={styles.View_36_1268}>
            <View style={styles.View_36_1269}>
              <Text style={styles.Text_36_1269}>My Account</Text>
            </View>
            <View style={styles.View_36_1270}>
              <Text style={styles.Text_36_1270}>
                Profile My orders Offers History
              </Text>
            </View>
          </View>
          <View style={styles.View_36_1271}>
            <View style={styles.View_36_1272}>
              <Text style={styles.Text_36_1272}>Navigation</Text>
            </View>
            <View style={styles.View_36_1273}>
              <Text style={styles.Text_36_1273}>
                Shop About us Join us Blog
              </Text>
            </View>
          </View>
          <View style={styles.View_36_1274}>
            <View style={styles.View_36_1275}>
              <Text style={styles.Text_36_1275}>Important Links</Text>
            </View>
            <View style={styles.View_36_1276}>
              <Text style={styles.Text_36_1276}>
                Privacy Policy Terms &amp; conditions earth rewards Refer and
                earn
              </Text>
            </View>
          </View>
          <View style={styles.View_36_1277} />
          <View style={styles.View_36_1278}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1171/c308/d73493b8829d2cba16fbc69c598f1430"
              }}
              style={styles.ImageBackground_36_1279}
            />
            <View style={styles.View_36_1280}>
              <View style={styles.View_36_1281}>
                <View style={styles.View_36_1282}>
                  <Text style={styles.Text_36_1282}>earth</Text>
                </View>
                <View style={styles.View_36_1283}>
                  <Text style={styles.Text_36_1283}>tm</Text>
                </View>
                <View style={styles.View_36_1284}>
                  <Text style={styles.Text_36_1284}>baby</Text>
                </View>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb8e/61ca/96e2ad0cede9df0c18caa625dd3c711e"
            }}
            style={styles.ImageBackground_36_1285}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b577/fb17/f1366f7340ec4bae534525f43038b6c7"
            }}
            style={styles.ImageBackground_36_1287}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/017c/1dc3/87318b2bd25a42c24ed23a3b9cfc9dfe"
            }}
            style={styles.ImageBackground_36_1289}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7bc/ab4a/bfa90bb32e591129bc5d52adc16d5379"
            }}
            style={styles.ImageBackground_36_1291}
          />
        </View>
      </View>
      <View style={styles.View_36_1293} />
      <View style={styles.View_36_1538}>
        <View style={styles.View_36_1539} />
        <View style={styles.View_36_1540}>
          <Text style={styles.Text_36_1540}>
            A wide range of products crafted with care &amp;sincerity
          </Text>
        </View>
      </View>
      <View style={styles.View_36_1656}>
        <View style={styles.View_36_1657}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b159/dddc/a14c5d65491b3c307f07c7790bb42485"
            }}
            style={styles.ImageBackground_36_1658}
          />
          <View style={styles.View_36_1660}>
            <View style={styles.View_36_1661}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e25/752d/e750f4552b17a0f6bca264a33b501009"
                }}
                style={styles.ImageBackground_36_1662}
              />
            </View>
            <View style={styles.View_36_1667}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_36_1668}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_36_1670}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_36_1672}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_36_1674}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f36/324a/2ee4f992e62277dab3bd703220673b53"
                }}
                style={styles.ImageBackground_36_1676}
              />
            </View>
            <View style={styles.View_36_1663}>
              <View style={styles.View_36_1664}>
                <Text style={styles.Text_36_1664}>
                  Nappy Rash Protection Oil
                </Text>
              </View>
            </View>
            <View style={styles.View_36_1665}>
              <View style={styles.View_36_1666}>
                <Text style={styles.Text_36_1666}>
                  99.9% Certified Natural Origin
                </Text>
              </View>
            </View>
            <View style={styles.View_36_1678}>
              <View style={styles.View_36_1679}>
                <Text style={styles.Text_36_1679}>₹320.00 - ₹800.00</Text>
              </View>
            </View>
            <View style={styles.View_36_1749}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf9f/596a/bdeb5907a848437fcc8f52ab5348c576"
                }}
                style={styles.ImageBackground_36_1750}
              />
              <View style={styles.View_36_1751}>
                <Text style={styles.Text_36_1751}>add to cart</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_36_1680}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b159/dddc/a14c5d65491b3c307f07c7790bb42485"
            }}
            style={styles.ImageBackground_36_1681}
          />
          <View style={styles.View_36_1683}>
            <View style={styles.View_36_1684}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb4c/f10a/5eb05cb38ad69530e94898573af63be4"
                }}
                style={styles.ImageBackground_36_1685}
              />
            </View>
            <View style={styles.View_36_1690}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_36_1691}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_36_1693}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_36_1695}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_36_1697}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1276/23df/bcb5f2c5723803dfeefab1035b6320fb"
                }}
                style={styles.ImageBackground_36_1699}
              />
            </View>
            <View style={styles.View_36_1686}>
              <View style={styles.View_36_1687}>
                <Text style={styles.Text_36_1687}>
                  Ubtan Sunni Pindi Bath Powder
                </Text>
              </View>
            </View>
            <View style={styles.View_36_1688}>
              <View style={styles.View_36_1689}>
                <Text style={styles.Text_36_1689}>
                  100% certified natural origin
                </Text>
              </View>
            </View>
            <View style={styles.View_36_1701}>
              <View style={styles.View_36_1702}>
                <Text style={styles.Text_36_1702}>₹425.00 </Text>
              </View>
            </View>
            <View style={styles.View_36_1757}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf9f/596a/bdeb5907a848437fcc8f52ab5348c576"
                }}
                style={styles.ImageBackground_36_1758}
              />
              <View style={styles.View_36_1759}>
                <Text style={styles.Text_36_1759}>add to cart</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_36_1703}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b159/dddc/a14c5d65491b3c307f07c7790bb42485"
            }}
            style={styles.ImageBackground_36_1704}
          />
          <View style={styles.View_36_1706}>
            <View style={styles.View_36_1707}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36c1/5269/e531b9e4b5738015c9bd7a35e669baff"
                }}
                style={styles.ImageBackground_36_1708}
              />
            </View>
            <View style={styles.View_36_1713}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_36_1714}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_36_1716}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_36_1718}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_36_1720}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f36/324a/2ee4f992e62277dab3bd703220673b53"
                }}
                style={styles.ImageBackground_36_1722}
              />
            </View>
            <View style={styles.View_36_1709}>
              <View style={styles.View_36_1710}>
                <Text style={styles.Text_36_1710}>
                  Nappy Rash Protection Oil
                </Text>
              </View>
            </View>
            <View style={styles.View_36_1711}>
              <View style={styles.View_36_1712}>
                <Text style={styles.Text_36_1712}>
                  99.9% Certified Natural Origin
                </Text>
              </View>
            </View>
            <View style={styles.View_36_1724}>
              <View style={styles.View_36_1725}>
                <Text style={styles.Text_36_1725}>₹320.00 - ₹800.00</Text>
              </View>
            </View>
            <View style={styles.View_36_1761}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf9f/596a/bdeb5907a848437fcc8f52ab5348c576"
                }}
                style={styles.ImageBackground_36_1762}
              />
              <View style={styles.View_36_1763}>
                <Text style={styles.Text_36_1763}>add to cart</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_36_1726}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b6f/206b/a4464f086d26d5092126f7ae37b0f343"
            }}
            style={styles.ImageBackground_36_1727}
          />
          <View style={styles.View_36_1729}>
            <View style={styles.View_36_1730}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88c5/a54c/291dd46944c622cfd87c851497f0f926"
                }}
                style={styles.ImageBackground_36_1731}
              />
            </View>
            <View style={styles.View_36_1736}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_36_1737}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_36_1739}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_36_1741}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_36_1743}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f36/324a/2ee4f992e62277dab3bd703220673b53"
                }}
                style={styles.ImageBackground_36_1745}
              />
            </View>
            <View style={styles.View_36_1732}>
              <View style={styles.View_36_1733}>
                <Text style={styles.Text_36_1733}>Virgin Coconut Oil</Text>
              </View>
            </View>
            <View style={styles.View_36_1734}>
              <View style={styles.View_36_1735}>
                <Text style={styles.Text_36_1735}>
                  100% Certified Natural Origin
                </Text>
              </View>
            </View>
            <View style={styles.View_36_1747}>
              <View style={styles.View_36_1748}>
                <Text style={styles.Text_36_1748}>₹320.00 - ₹800.00</Text>
              </View>
            </View>
            <View style={styles.View_36_1651}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf9f/596a/bdeb5907a848437fcc8f52ab5348c576"
                }}
                style={styles.ImageBackground_36_1652}
              />
              <View style={styles.View_36_1653}>
                <Text style={styles.Text_36_1653}>add to cart</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_36_1765}>
        <View style={styles.View_36_1766}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b159/dddc/a14c5d65491b3c307f07c7790bb42485"
            }}
            style={styles.ImageBackground_36_1767}
          />
          <View style={styles.View_36_1769}>
            <View style={styles.View_36_1770}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e25/752d/e750f4552b17a0f6bca264a33b501009"
                }}
                style={styles.ImageBackground_36_1771}
              />
            </View>
            <View style={styles.View_36_1772}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_36_1773}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1996/db39/077be690b98d87db05ec31d31fea1ad0"
                }}
                style={styles.ImageBackground_36_1775}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1996/db39/077be690b98d87db05ec31d31fea1ad0"
                }}
                style={styles.ImageBackground_36_1777}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_36_1779}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f36/324a/2ee4f992e62277dab3bd703220673b53"
                }}
                style={styles.ImageBackground_36_1781}
              />
            </View>
            <View style={styles.View_36_1783}>
              <View style={styles.View_36_1784}>
                <Text style={styles.Text_36_1784}>
                  Nappy Rash Protection Oil
                </Text>
              </View>
            </View>
            <View style={styles.View_36_1785}>
              <View style={styles.View_36_1786}>
                <Text style={styles.Text_36_1786}>
                  99.9% Certified Natural Origin
                </Text>
              </View>
            </View>
            <View style={styles.View_36_1787}>
              <View style={styles.View_36_1788}>
                <Text style={styles.Text_36_1788}>₹320.00 - ₹800.00</Text>
              </View>
            </View>
            <View style={styles.View_36_1789}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf9f/596a/bdeb5907a848437fcc8f52ab5348c576"
                }}
                style={styles.ImageBackground_36_1790}
              />
              <View style={styles.View_36_1791}>
                <Text style={styles.Text_36_1791}>add to cart</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_36_1792}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b159/dddc/a14c5d65491b3c307f07c7790bb42485"
            }}
            style={styles.ImageBackground_36_1793}
          />
          <View style={styles.View_36_1795}>
            <View style={styles.View_36_1796}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb4c/f10a/5eb05cb38ad69530e94898573af63be4"
                }}
                style={styles.ImageBackground_36_1797}
              />
            </View>
            <View style={styles.View_36_1798}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_36_1799}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1996/db39/077be690b98d87db05ec31d31fea1ad0"
                }}
                style={styles.ImageBackground_36_1801}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1996/db39/077be690b98d87db05ec31d31fea1ad0"
                }}
                style={styles.ImageBackground_36_1803}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_36_1805}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1276/23df/bcb5f2c5723803dfeefab1035b6320fb"
                }}
                style={styles.ImageBackground_36_1807}
              />
            </View>
            <View style={styles.View_36_1809}>
              <View style={styles.View_36_1810}>
                <Text style={styles.Text_36_1810}>
                  Ubtan Sunni Pindi Bath Powder
                </Text>
              </View>
            </View>
            <View style={styles.View_36_1811}>
              <View style={styles.View_36_1812}>
                <Text style={styles.Text_36_1812}>
                  100% certified natural origin
                </Text>
              </View>
            </View>
            <View style={styles.View_36_1813}>
              <View style={styles.View_36_1814}>
                <Text style={styles.Text_36_1814}>₹425.00 </Text>
              </View>
            </View>
            <View style={styles.View_36_1815}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf9f/596a/bdeb5907a848437fcc8f52ab5348c576"
                }}
                style={styles.ImageBackground_36_1816}
              />
              <View style={styles.View_36_1817}>
                <Text style={styles.Text_36_1817}>add to cart</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_36_1818}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b159/dddc/a14c5d65491b3c307f07c7790bb42485"
            }}
            style={styles.ImageBackground_36_1819}
          />
          <View style={styles.View_36_1821}>
            <View style={styles.View_36_1822}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36c1/5269/e531b9e4b5738015c9bd7a35e669baff"
                }}
                style={styles.ImageBackground_36_1823}
              />
            </View>
            <View style={styles.View_36_1824}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_36_1825}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_36_1827}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_36_1829}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_36_1831}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f36/324a/2ee4f992e62277dab3bd703220673b53"
                }}
                style={styles.ImageBackground_36_1833}
              />
            </View>
            <View style={styles.View_36_1835}>
              <View style={styles.View_36_1836}>
                <Text style={styles.Text_36_1836}>
                  Nappy Rash Protection Oil
                </Text>
              </View>
            </View>
            <View style={styles.View_36_1837}>
              <View style={styles.View_36_1838}>
                <Text style={styles.Text_36_1838}>
                  99.9% Certified Natural Origin
                </Text>
              </View>
            </View>
            <View style={styles.View_36_1839}>
              <View style={styles.View_36_1840}>
                <Text style={styles.Text_36_1840}>₹320.00 - ₹800.00</Text>
              </View>
            </View>
            <View style={styles.View_36_1841}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf9f/596a/bdeb5907a848437fcc8f52ab5348c576"
                }}
                style={styles.ImageBackground_36_1842}
              />
              <View style={styles.View_36_1843}>
                <Text style={styles.Text_36_1843}>add to cart</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_36_1844}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b6f/206b/a4464f086d26d5092126f7ae37b0f343"
            }}
            style={styles.ImageBackground_36_1845}
          />
          <View style={styles.View_36_1847}>
            <View style={styles.View_36_1848}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88c5/a54c/291dd46944c622cfd87c851497f0f926"
                }}
                style={styles.ImageBackground_36_1849}
              />
            </View>
            <View style={styles.View_36_1850}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_36_1851}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_36_1853}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_36_1855}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_36_1857}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f36/324a/2ee4f992e62277dab3bd703220673b53"
                }}
                style={styles.ImageBackground_36_1859}
              />
            </View>
            <View style={styles.View_36_1861}>
              <View style={styles.View_36_1862}>
                <Text style={styles.Text_36_1862}>Virgin Coconut Oil</Text>
              </View>
            </View>
            <View style={styles.View_36_1863}>
              <View style={styles.View_36_1864}>
                <Text style={styles.Text_36_1864}>
                  100% Certified Natural Origin
                </Text>
              </View>
            </View>
            <View style={styles.View_36_1865}>
              <View style={styles.View_36_1866}>
                <Text style={styles.Text_36_1866}>₹320.00 - ₹800.00</Text>
              </View>
            </View>
            <View style={styles.View_36_1867}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf9f/596a/bdeb5907a848437fcc8f52ab5348c576"
                }}
                style={styles.ImageBackground_36_1868}
              />
              <View style={styles.View_36_1869}>
                <Text style={styles.Text_36_1869}>add to cart</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_36_1874}>
        <View style={styles.View_36_1875}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b159/dddc/a14c5d65491b3c307f07c7790bb42485"
            }}
            style={styles.ImageBackground_36_1876}
          />
          <View style={styles.View_36_1878}>
            <View style={styles.View_36_1879}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e25/752d/e750f4552b17a0f6bca264a33b501009"
                }}
                style={styles.ImageBackground_36_1880}
              />
            </View>
            <View style={styles.View_36_1881}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_36_1882}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_36_1884}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_36_1886}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_36_1888}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f36/324a/2ee4f992e62277dab3bd703220673b53"
                }}
                style={styles.ImageBackground_36_1890}
              />
            </View>
            <View style={styles.View_36_1892}>
              <View style={styles.View_36_1893}>
                <Text style={styles.Text_36_1893}>
                  Nappy Rash Protection Oil
                </Text>
              </View>
            </View>
            <View style={styles.View_36_1894}>
              <View style={styles.View_36_1895}>
                <Text style={styles.Text_36_1895}>
                  99.9% Certified Natural Origin
                </Text>
              </View>
            </View>
            <View style={styles.View_36_1896}>
              <View style={styles.View_36_1897}>
                <Text style={styles.Text_36_1897}>₹320.00 - ₹800.00</Text>
              </View>
            </View>
            <View style={styles.View_36_1898}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf9f/596a/bdeb5907a848437fcc8f52ab5348c576"
                }}
                style={styles.ImageBackground_36_1899}
              />
              <View style={styles.View_36_1900}>
                <Text style={styles.Text_36_1900}>add to cart</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_36_1901}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b159/dddc/a14c5d65491b3c307f07c7790bb42485"
            }}
            style={styles.ImageBackground_36_1902}
          />
          <View style={styles.View_36_1904}>
            <View style={styles.View_36_1905}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb4c/f10a/5eb05cb38ad69530e94898573af63be4"
                }}
                style={styles.ImageBackground_36_1906}
              />
            </View>
            <View style={styles.View_36_1907}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_36_1908}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_36_1910}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_36_1912}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_36_1914}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1276/23df/bcb5f2c5723803dfeefab1035b6320fb"
                }}
                style={styles.ImageBackground_36_1916}
              />
            </View>
            <View style={styles.View_36_1918}>
              <View style={styles.View_36_1919}>
                <Text style={styles.Text_36_1919}>
                  Ubtan Sunni Pindi Bath Powder
                </Text>
              </View>
            </View>
            <View style={styles.View_36_1920}>
              <View style={styles.View_36_1921}>
                <Text style={styles.Text_36_1921}>
                  100% certified natural origin
                </Text>
              </View>
            </View>
            <View style={styles.View_36_1922}>
              <View style={styles.View_36_1923}>
                <Text style={styles.Text_36_1923}>₹425.00 </Text>
              </View>
            </View>
            <View style={styles.View_36_1924}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf9f/596a/bdeb5907a848437fcc8f52ab5348c576"
                }}
                style={styles.ImageBackground_36_1925}
              />
              <View style={styles.View_36_1926}>
                <Text style={styles.Text_36_1926}>add to cart</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_36_1927}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b159/dddc/a14c5d65491b3c307f07c7790bb42485"
            }}
            style={styles.ImageBackground_36_1928}
          />
          <View style={styles.View_36_1930}>
            <View style={styles.View_36_1931}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36c1/5269/e531b9e4b5738015c9bd7a35e669baff"
                }}
                style={styles.ImageBackground_36_1932}
              />
            </View>
            <View style={styles.View_36_1933}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_36_1934}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_36_1936}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_36_1938}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_36_1940}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f36/324a/2ee4f992e62277dab3bd703220673b53"
                }}
                style={styles.ImageBackground_36_1942}
              />
            </View>
            <View style={styles.View_36_1944}>
              <View style={styles.View_36_1945}>
                <Text style={styles.Text_36_1945}>
                  Nappy Rash Protection Oil
                </Text>
              </View>
            </View>
            <View style={styles.View_36_1946}>
              <View style={styles.View_36_1947}>
                <Text style={styles.Text_36_1947}>
                  99.9% Certified Natural Origin
                </Text>
              </View>
            </View>
            <View style={styles.View_36_1948}>
              <View style={styles.View_36_1949}>
                <Text style={styles.Text_36_1949}>₹320.00 - ₹800.00</Text>
              </View>
            </View>
            <View style={styles.View_36_1950}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf9f/596a/bdeb5907a848437fcc8f52ab5348c576"
                }}
                style={styles.ImageBackground_36_1951}
              />
              <View style={styles.View_36_1952}>
                <Text style={styles.Text_36_1952}>add to cart</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_36_1953}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b6f/206b/a4464f086d26d5092126f7ae37b0f343"
            }}
            style={styles.ImageBackground_36_1954}
          />
          <View style={styles.View_36_1956}>
            <View style={styles.View_36_1957}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88c5/a54c/291dd46944c622cfd87c851497f0f926"
                }}
                style={styles.ImageBackground_36_1958}
              />
            </View>
            <View style={styles.View_36_1959}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_36_1960}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_36_1962}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/c52f/d3b28e98ed8994a9c9578d36c56da959"
                }}
                style={styles.ImageBackground_36_1964}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/5c30/dd04e9c778c615f31a0cfc53180f6239"
                }}
                style={styles.ImageBackground_36_1966}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f36/324a/2ee4f992e62277dab3bd703220673b53"
                }}
                style={styles.ImageBackground_36_1968}
              />
            </View>
            <View style={styles.View_36_1970}>
              <View style={styles.View_36_1971}>
                <Text style={styles.Text_36_1971}>Virgin Coconut Oil</Text>
              </View>
            </View>
            <View style={styles.View_36_1972}>
              <View style={styles.View_36_1973}>
                <Text style={styles.Text_36_1973}>
                  100% Certified Natural Origin
                </Text>
              </View>
            </View>
            <View style={styles.View_36_1974}>
              <View style={styles.View_36_1975}>
                <Text style={styles.Text_36_1975}>₹320.00 - ₹800.00</Text>
              </View>
            </View>
            <View style={styles.View_36_1976}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf9f/596a/bdeb5907a848437fcc8f52ab5348c576"
                }}
                style={styles.ImageBackground_36_1977}
              />
              <View style={styles.View_36_1978}>
                <Text style={styles.Text_36_1978}>add to cart</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_36_2812}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac26/878c/5b755c0d07d134138a2b305845097807"
          }}
          style={styles.ImageBackground_36_2813}
        />
        <View style={styles.View_36_2814}>
          <Text style={styles.Text_36_2814}>1</Text>
        </View>
        <View style={styles.View_36_2815}>
          <Text style={styles.Text_36_2815}>3</Text>
        </View>
        <View style={styles.View_36_2816}>
          <Text style={styles.Text_36_2816}>2</Text>
        </View>
        <View style={styles.View_36_2817}>
          <Text style={styles.Text_36_2817}>4</Text>
        </View>
        <View style={styles.View_36_2818}>
          <Text style={styles.Text_36_2818}>5</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d6b/f377/123ed482d1f74fb0347b60b01775565e"
          }}
          style={styles.ImageBackground_36_2819}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/412f/d8b5/387007c47d8af9a711832c66097b8ee7"
          }}
          style={styles.ImageBackground_36_2821}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3624/ab8c/2c8d8813d41d293401757c87a44c25f3"
          }}
          style={styles.ImageBackground_36_2823}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94be/959b/07a99176baae866737abf0ab30bacd4b"
          }}
          style={styles.ImageBackground_36_2826}
        />
      </View>
      <View style={styles.View_36_2829}>
        <View style={styles.View_36_2830}>
          <View style={styles.View_36_2831}>
            <Text style={styles.Text_36_2831}>home / shop / all products</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("455%") },
  View_36_972: {
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
  View_I36_972_24_214: {
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
  ImageBackground_I36_972_24_215: {
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
  View_I36_972_24_216: {
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
  View_I36_972_24_217: {
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
  View_I36_972_24_218: {
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
  Text_I36_972_24_218: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I36_972_24_219: {
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
  View_I36_972_24_220: {
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
  Text_I36_972_24_220: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I36_972_24_221: {
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
  View_I36_972_24_222: {
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
  Text_I36_972_24_222: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I36_972_24_223: {
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
  View_I36_972_24_224: {
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
  Text_I36_972_24_224: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I36_972_24_225: {
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
  View_I36_972_24_226: {
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
  Text_I36_972_24_226: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I36_972_24_227: {
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
  View_I36_972_24_228: {
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
  Text_I36_972_24_228: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I36_972_36_752: {
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
  Text_I36_972_36_752: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_I36_972_24_229: {
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
  View_I36_972_24_230: {
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
  ImageBackground_I36_972_24_231: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_972_24_232: {
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
  ImageBackground_I36_972_24_233: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I36_972_31_130: {
    width: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%")
  },
  View_I36_972_24_234: {
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
  ImageBackground_I36_972_24_235: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_36_1265: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("407%"),
    backgroundColor: "rgba(122, 158, 129, 1)",
    overflow: "hidden"
  },
  View_36_1266: {
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
  View_36_1267: {
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
  Text_36_1267: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22499999999999998,
    textTransform: "none"
  },
  View_36_1268: {
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
  View_36_1269: {
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
  Text_36_1269: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22499999999999998,
    textTransform: "none"
  },
  View_36_1270: {
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
  Text_36_1270: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22499999999999998,
    textTransform: "none"
  },
  View_36_1271: {
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
  View_36_1272: {
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
  Text_36_1272: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22499999999999998,
    textTransform: "none"
  },
  View_36_1273: {
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
  Text_36_1273: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22499999999999998,
    textTransform: "none"
  },
  View_36_1274: {
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
  View_36_1275: {
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
  Text_36_1275: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22499999999999998,
    textTransform: "none"
  },
  View_36_1276: {
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
  Text_36_1276: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.22499999999999998,
    textTransform: "none"
  },
  View_36_1277: {
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
  View_36_1278: {
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
  ImageBackground_36_1279: {
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
  View_36_1280: {
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
  View_36_1281: {
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
  View_36_1282: {
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
  Text_36_1282: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 25.60124397277832,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.790031099319458,
    textTransform: "none"
  },
  View_36_1283: {
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
  Text_36_1283: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7.1093034744262695,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.22773258686065675,
    textTransform: "none"
  },
  View_36_1284: {
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
  Text_36_1284: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13.820873260498047,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9801480293273925,
    textTransform: "none"
  },
  ImageBackground_36_1285: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_36_1287: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_36_1289: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_36_1291: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  View_36_1293: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("368%"),
    backgroundColor: "rgba(148, 148, 148, 1)"
  },
  View_36_1538: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%")
  },
  View_36_1539: {
    width: wp("100%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(122, 158, 129, 1)"
  },
  View_36_1540: {
    width: wp("51%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("13%"),
    justifyContent: "center"
  },
  Text_36_1540: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1656: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("111%")
  },
  View_36_1657: {
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
  ImageBackground_36_1658: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_36_1660: {
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
  View_36_1661: {
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
  ImageBackground_36_1662: {
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
  View_36_1667: {
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
  ImageBackground_36_1668: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_36_1670: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_36_1672: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_36_1674: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_36_1676: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_36_1663: {
    width: wp("18%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_1664: {
    width: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_36_1664: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1665: {
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_1666: {
    width: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_36_1666: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1678: {
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
  View_36_1679: {
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_36_1679: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1749: {
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
  ImageBackground_36_1750: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_36_1751: {
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
  Text_36_1751: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_36_1680: {
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
  ImageBackground_36_1681: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_36_1683: {
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
  View_36_1684: {
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
  ImageBackground_36_1685: {
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
  View_36_1690: {
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
  ImageBackground_36_1691: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_36_1693: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_36_1695: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_36_1697: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_36_1699: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_36_1686: {
    width: wp("18%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_1687: {
    width: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_36_1687: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1688: {
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_1689: {
    width: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_36_1689: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1701: {
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
  View_36_1702: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_36_1702: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1757: {
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
  ImageBackground_36_1758: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_36_1759: {
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
  Text_36_1759: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_36_1703: {
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
  ImageBackground_36_1704: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_36_1706: {
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
  View_36_1707: {
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
  ImageBackground_36_1708: {
    width: wp("12%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_36_1713: {
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
  ImageBackground_36_1714: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_36_1716: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_36_1718: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_36_1720: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_36_1722: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_36_1709: {
    width: wp("18%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_1710: {
    width: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_36_1710: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1711: {
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_1712: {
    width: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_36_1712: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1724: {
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
  View_36_1725: {
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_36_1725: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1761: {
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
  ImageBackground_36_1762: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_36_1763: {
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
  Text_36_1763: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_36_1726: {
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
  ImageBackground_36_1727: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_36_1729: {
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
  View_36_1730: {
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
  ImageBackground_36_1731: {
    width: wp("12%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_36_1736: {
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
  ImageBackground_36_1737: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_36_1739: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_36_1741: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_36_1743: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_36_1745: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_36_1732: {
    width: wp("18%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_1733: {
    width: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_36_1733: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1734: {
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_1735: {
    width: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_36_1735: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1747: {
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
  View_36_1748: {
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_36_1748: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1651: {
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
  ImageBackground_36_1652: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_36_1653: {
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
  Text_36_1653: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_36_1765: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("186%")
  },
  View_36_1766: {
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
  ImageBackground_36_1767: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_36_1769: {
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
  View_36_1770: {
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
  ImageBackground_36_1771: {
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
  View_36_1772: {
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
  ImageBackground_36_1773: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_36_1775: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_36_1777: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_36_1779: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_36_1781: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_36_1783: {
    width: wp("18%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_1784: {
    width: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_36_1784: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1785: {
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_1786: {
    width: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_36_1786: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1787: {
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
  View_36_1788: {
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_36_1788: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1789: {
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
  ImageBackground_36_1790: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_36_1791: {
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
  Text_36_1791: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_36_1792: {
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
  ImageBackground_36_1793: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_36_1795: {
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
  View_36_1796: {
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
  ImageBackground_36_1797: {
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
  View_36_1798: {
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
  ImageBackground_36_1799: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_36_1801: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_36_1803: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_36_1805: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_36_1807: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_36_1809: {
    width: wp("18%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_1810: {
    width: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_36_1810: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1811: {
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_1812: {
    width: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_36_1812: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1813: {
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
  View_36_1814: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_36_1814: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1815: {
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
  ImageBackground_36_1816: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_36_1817: {
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
  Text_36_1817: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_36_1818: {
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
  ImageBackground_36_1819: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_36_1821: {
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
  View_36_1822: {
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
  ImageBackground_36_1823: {
    width: wp("12%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_36_1824: {
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
  ImageBackground_36_1825: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_36_1827: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_36_1829: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_36_1831: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_36_1833: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_36_1835: {
    width: wp("18%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_1836: {
    width: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_36_1836: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1837: {
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_1838: {
    width: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_36_1838: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1839: {
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
  View_36_1840: {
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_36_1840: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1841: {
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
  ImageBackground_36_1842: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_36_1843: {
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
  Text_36_1843: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_36_1844: {
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
  ImageBackground_36_1845: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_36_1847: {
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
  View_36_1848: {
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
  ImageBackground_36_1849: {
    width: wp("12%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_36_1850: {
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
  ImageBackground_36_1851: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_36_1853: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_36_1855: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_36_1857: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_36_1859: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_36_1861: {
    width: wp("18%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_1862: {
    width: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_36_1862: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1863: {
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_1864: {
    width: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_36_1864: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1865: {
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
  View_36_1866: {
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_36_1866: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1867: {
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
  ImageBackground_36_1868: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_36_1869: {
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
  Text_36_1869: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_36_1874: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("258%")
  },
  View_36_1875: {
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
  ImageBackground_36_1876: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_36_1878: {
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
  View_36_1879: {
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
  ImageBackground_36_1880: {
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
  View_36_1881: {
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
  ImageBackground_36_1882: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_36_1884: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_36_1886: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_36_1888: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_36_1890: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_36_1892: {
    width: wp("18%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_1893: {
    width: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_36_1893: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1894: {
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_1895: {
    width: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_36_1895: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1896: {
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
  View_36_1897: {
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_36_1897: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1898: {
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
  ImageBackground_36_1899: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_36_1900: {
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
  Text_36_1900: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_36_1901: {
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
  ImageBackground_36_1902: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_36_1904: {
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
  View_36_1905: {
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
  ImageBackground_36_1906: {
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
  View_36_1907: {
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
  ImageBackground_36_1908: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_36_1910: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_36_1912: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_36_1914: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_36_1916: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_36_1918: {
    width: wp("18%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_1919: {
    width: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_36_1919: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1920: {
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_1921: {
    width: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_36_1921: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1922: {
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
  View_36_1923: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_36_1923: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1924: {
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
  ImageBackground_36_1925: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_36_1926: {
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
  Text_36_1926: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_36_1927: {
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
  ImageBackground_36_1928: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_36_1930: {
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
  View_36_1931: {
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
  ImageBackground_36_1932: {
    width: wp("12%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_36_1933: {
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
  ImageBackground_36_1934: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_36_1936: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_36_1938: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_36_1940: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_36_1942: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_36_1944: {
    width: wp("18%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_1945: {
    width: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_36_1945: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1946: {
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_1947: {
    width: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_36_1947: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1948: {
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
  View_36_1949: {
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_36_1949: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1950: {
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
  ImageBackground_36_1951: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_36_1952: {
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
  Text_36_1952: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_36_1953: {
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
  ImageBackground_36_1954: {
    width: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_36_1956: {
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
  View_36_1957: {
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
  ImageBackground_36_1958: {
    width: wp("12%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_36_1959: {
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
  ImageBackground_36_1960: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_36_1962: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_36_1964: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_36_1966: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_36_1968: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_36_1970: {
    width: wp("18%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_1971: {
    width: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_36_1971: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1972: {
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_1973: {
    width: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_36_1973: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1974: {
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
  View_36_1975: {
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_36_1975: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_36_1976: {
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
  ImageBackground_36_1977: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_36_1978: {
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
  Text_36_1978: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_36_2812: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("351%")
  },
  ImageBackground_36_2813: {
    width: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%")
  },
  View_36_2814: {
    width: wp("3%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_36_2814: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14137931168079376,
    textTransform: "none"
  },
  View_36_2815: {
    width: wp("3%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_36_2815: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14137931168079376,
    textTransform: "none"
  },
  View_36_2816: {
    width: wp("3%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_36_2816: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14137931168079376,
    textTransform: "none"
  },
  View_36_2817: {
    width: wp("3%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_36_2817: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14137931168079376,
    textTransform: "none"
  },
  View_36_2818: {
    width: wp("3%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_36_2818: {
    color: "rgba(122, 158, 129, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14137931168079376,
    textTransform: "none"
  },
  ImageBackground_36_2819: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_36_2821: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_36_2823: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_36_2826: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  View_36_2829: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("51%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_2830: {
    width: wp("38%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_2831: {
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
  Text_36_2831: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
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
