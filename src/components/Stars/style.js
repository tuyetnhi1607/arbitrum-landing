import styled, { keyframes } from "styled-components";

const animStar = keyframes`
    0% {
        transform: translateY(0);
    } 100% {
        transform: translateY(-2000px);
    }
`;

export const StarsWrapper = styled.div`
  background-color: var(--bg);
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -3;
  color: var(--light-grey);
  & .stars-small {
    animation: ${animStar} 200s linear infinite;
  }
  & .stars-small,
  .stars-small::after {
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: 2275px 628px #fff, 976px 1205px #fff, 783px 2068px #fff,
      1983px 1856px #fff, 1597px 1719px #fff, 1050px 447px #fff,
      795px 1271px #fff, 1390px 947px #fff, 217px 291px #fff, 2331px 1337px #fff,
      2312px 2169px #fff, 340px 2050px #fff, 103px 2247px #fff,
      2023px 194px #fff, 1331px 2182px #fff, 1770px 1978px #fff,
      581px 2381px #fff, 186px 1644px #fff, 1674px 1640px #fff,
      1081px 1545px #fff, 1537px 1968px #fff, 651px 268px #fff,
      753px 1546px #fff, 1224px 1767px #fff, 36px 1070px #fff,
      2019px 1560px #fff, 1965px 195px #fff, 687px 1545px #fff, 2391px 29px #fff,
      255px 66px #fff, 2250px 2046px #fff, 165px 1658px #fff, 378px 1882px #fff,
      184px 181px #fff, 1325px 716px #fff, 1575px 1104px #fff,
      1938px 1833px #fff, 477px 981px #fff, 493px 706px #fff, 1842px 273px #fff,
      268px 680px #fff, 1974px 1008px #fff, 1765px 1754px #fff,
      1335px 2257px #fff, 2019px 512px #fff, 805px 699px #fff, 1148px 276px #fff,
      2335px 1636px #fff, 1792px 1716px #fff, 1407px 295px #fff,
      1792px 1447px #fff, 357px 1175px #fff, 1889px 2368px #fff,
      432px 1337px #fff, 998px 2165px #fff, 1778px 1245px #fff,
      1530px 1305px #fff, 1455px 188px #fff, 1327px 877px #fff,
      2312px 1629px #fff, 1298px 479px #fff, 573px 2346px #fff, 798px 131px #fff,
      1132px 1371px #fff, 790px 338px #fff, 2px 69px #fff, 1314px 575px #fff,
      2194px 1140px #fff, 1192px 824px #fff, 2360px 2184px #fff,
      1289px 338px #fff, 214px 1847px #fff, 2066px 2230px #fff, 32px 558px #fff,
      72px 1550px #fff, 81px 1226px #fff, 1640px 991px #fff, 2232px 1168px #fff,
      1112px 608px #fff, 46px 487px #fff, 2328px 131px #fff, 183px 854px #fff,
      403px 2232px #fff, 699px 1524px #fff, 1299px 1017px #fff, 561px 79px #fff,
      1689px 1126px #fff, 2167px 348px #fff, 2141px 1222px #fff,
      1055px 865px #fff, 1307px 1001px #fff, 1059px 20px #fff, 380px 1087px #fff,
      2004px 1436px #fff, 420px 1260px #fff, 1742px 1662px #fff,
      942px 154px #fff, 1664px 494px #fff, 2372px 6px #fff, 299px 895px #fff,
      328px 1126px #fff, 1733px 1735px #fff, 1644px 1381px #fff, 82px 348px #fff,
      1156px 1563px #fff, 653px 926px #fff, 203px 1667px #fff, 770px 2012px #fff,
      493px 1220px #fff, 1729px 1357px #fff, 1092px 1883px #fff,
      435px 1049px #fff, 204px 1833px #fff, 2188px 339px #fff, 87px 626px #fff,
      233px 1578px #fff, 1581px 436px #fff, 38px 2183px #fff, 1269px 2080px #fff,
      1845px 1408px #fff, 2111px 212px #fff, 449px 774px #fff, 88px 1096px #fff,
      780px 228px #fff, 858px 2377px #fff, 872px 343px #fff, 966px 1917px #fff,
      1099px 369px #fff, 2105px 227px #fff, 689px 1974px #fff,
      1370px 1678px #fff, 1769px 1349px #fff, 2214px 1200px #fff,
      76px 919px #fff, 2308px 1675px #fff, 430px 507px #fff, 2252px 1394px #fff,
      2379px 2169px #fff, 923px 550px #fff, 364px 1963px #fff, 359px 2048px #fff,
      2295px 2226px #fff, 1524px 625px #fff, 981px 1129px #fff,
      815px 2005px #fff, 409px 194px #fff, 1036px 345px #fff, 1953px 1108px #fff,
      588px 395px #fff, 747px 529px #fff, 87px 224px #fff, 812px 1010px #fff,
      324px 1386px #fff, 1045px 986px #fff, 1098px 2142px #fff, 352px 962px #fff,
      256px 2330px #fff, 483px 1498px #fff, 623px 2026px #fff, 1115px 170px #fff,
      605px 573px #fff, 1833px 24px #fff, 1603px 2380px #fff, 30px 465px #fff,
      1441px 765px #fff, 463px 1552px #fff, 2202px 595px #fff, 843px 1312px #fff,
      1330px 2010px #fff, 2287px 142px #fff, 2394px 141px #fff,
      1589px 1487px #fff, 1431px 860px #fff, 1849px 502px #fff, 66px 244px #fff,
      1802px 293px #fff, 2222px 1508px #fff, 712px 1570px #fff,
      1851px 2079px #fff, 1271px 1149px #fff, 1286px 1325px #fff,
      876px 484px #fff, 831px 962px #fff, 2081px 992px #fff, 1492px 2236px #fff,
      974px 2109px #fff, 1248px 1293px #fff, 1263px 843px #fff,
      1615px 1869px #fff, 13px 1714px #fff, 1765px 1159px #fff,
      1981px 293px #fff, 1295px 565px #fff, 898px 850px #fff, 1566px 2226px #fff,
      1490px 514px #fff, 674px 1349px #fff, 2287px 1064px #fff,
      1575px 2016px #fff, 462px 91px #fff, 567px 473px #fff, 1134px 230px #fff,
      51px 307px #fff, 670px 2007px #fff, 1468px 2322px #fff, 15px 1981px #fff,
      2374px 1647px #fff, 22px 2166px #fff, 962px 679px #fff, 2138px 1340px #fff,
      2206px 13px #fff, 1492px 2161px #fff, 1839px 2348px #fff,
      1155px 2013px #fff, 69px 1362px #fff, 335px 1323px #fff, 1824px 349px #fff,
      1671px 1343px #fff, 524px 2364px #fff, 164px 545px #fff, 705px 396px #fff,
      2081px 1734px #fff, 1093px 893px #fff, 919px 1441px #fff,
      951px 1518px #fff, 1549px 1472px #fff, 1263px 2195px #fff,
      1145px 1899px #fff, 159px 1173px #fff, 82px 1847px #fff, 1825px 432px #fff,
      1123px 1470px #fff, 1569px 150px #fff, 1608px 501px #fff,
      671px 1032px #fff, 1910px 1531px #fff, 922px 1661px #fff,
      862px 1063px #fff, 1383px 389px #fff, 616px 1075px #fff, 1058px 755px #fff,
      583px 124px #fff, 2386px 772px #fff, 897px 2170px #fff, 975px 566px #fff,
      1383px 45px #fff, 1745px 2339px #fff, 2016px 745px #fff, 973px 1121px #fff,
      260px 1093px #fff, 730px 167px #fff, 2350px 933px #fff, 24px 42px #fff,
      1481px 1315px #fff, 999px 855px #fff, 2110px 721px #fff,
      1383px 1767px #fff, 2125px 829px #fff, 281px 847px #fff,
      1554px 2052px #fff, 1706px 1341px #fff, 2203px 610px #fff,
      321px 151px #fff, 2119px 1939px #fff, 1453px 248px #fff, 135px 107px #fff,
      1469px 1921px #fff, 1164px 32px #fff, 695px 1564px #fff, 301px 2319px #fff,
      666px 681px #fff, 2px 1040px #fff, 296px 1408px #fff, 497px 1728px #fff,
      822px 1852px #fff, 208px 810px #fff, 2190px 953px #fff, 892px 1496px #fff,
      900px 1267px #fff, 725px 2378px #fff, 2134px 772px #fff, 148px 363px #fff,
      1513px 2261px #fff, 100px 1654px #fff, 1659px 793px #fff,
      2011px 1885px #fff, 1778px 2226px #fff, 2264px 95px #fff, 280px 218px #fff,
      1909px 2222px #fff, 79px 89px #fff, 2375px 2285px #fff, 2328px 496px #fff,
      210px 398px #fff, 2356px 1307px #fff, 276px 327px #fff, 1600px 793px #fff,
      812px 1608px #fff, 1290px 1546px #fff, 1812px 2275px #fff,
      2201px 686px #fff;
  }
  & .stars-big {
    animation: ${animStar} 100s linear infinite;
  }
  & .stars-big,
  .stars-big::before {
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: 343px 268px #fff, 594px 813px #fff, 703px 181px #fff,
      2180px 910px #fff, 327px 302px #fff, 910px 1350px #fff, 1809px 900px #fff,
      576px 1132px #fff, 2283px 2085px #fff, 94px 195px #fff, 752px 52px #fff,
      1750px 700px #fff, 1954px 2197px #fff, 1011px 1547px #fff,
      615px 1101px #fff, 623px 36px #fff, 1466px 2007px #fff, 239px 542px #fff,
      752px 744px #fff, 1979px 2070px #fff, 2223px 72px #fff, 1130px 2083px #fff,
      65px 1705px #fff, 1982px 1011px #fff, 820px 2201px #fff, 161px 1821px #fff,
      394px 1247px #fff, 1039px 508px #fff, 2112px 1678px #fff,
      1103px 1173px #fff, 1071px 225px #fff, 290px 2366px #fff,
      2298px 2316px #fff, 678px 3px #fff, 755px 1053px #fff, 401px 299px #fff,
      1509px 510px #fff, 2041px 1276px #fff, 976px 1715px #fff,
      515px 1706px #fff, 2119px 292px #fff, 1313px 1150px #fff, 343px 886px #fff,
      2042px 1906px #fff, 1269px 430px #fff, 1335px 566px #fff,
      2161px 600px #fff, 622px 2188px #fff, 939px 130px #fff, 787px 1807px #fff,
      1485px 1533px #fff;
  }
`;
