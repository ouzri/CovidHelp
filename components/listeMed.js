import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

const users = [
  {
    key: '5a31077f6dda99e234ad6727',
    name: 'Cathy Gilliam',
    company: 'EXOVENT',
    email: 'cathygilliam@exovent.com',
  },
  {
    key: '5a31077fcbee1cf54eed6c61',
    name: 'Norton Potts',
    company: 'COREPAN',
    email: 'nortonpotts@corepan.com',
  },
  {
    key: '5a31077fcb4a048c957901e4',
    name: 'Kelly Collins',
    company: 'SECURIA',
    email: 'kellycollins@securia.com',
  },
  {
    key: '5a31077f8234793502990437',
    name: 'Leach Harrison',
    company: 'COMBOGEN',
    email: 'leachharrison@combogen.com',
  },
  {
    key: '5a31077fd0a0162bbcf21522',
    name: 'Veronica Berry',
    company: 'VIRXO',
    email: 'veronicaberry@virxo.com',
  },
  {
    key: '5a31077f1c8053d67d5f93ca',
    name: 'Grant Goff',
    company: 'DAYCORE',
    email: 'grantgoff@daycore.com',
  },
  {
    key: '5a31077fcdcae933201a34f3',
    name: 'Ford Hooper',
    company: 'NETILITY',
    email: 'fordhooper@netility.com',
  },
  {
    key: '5a31077f58112c7161dd40ba',
    name: 'Debora Ross',
    company: 'COMTOUR',
    email: 'deboraross@comtour.com',
  },
  {
    key: '5a31077fb7a0c8f265736b10',
    name: 'Tanisha Salazar',
    company: 'KONGLE',
    email: 'tanishasalazar@kongle.com',
  },
  {
    key: '5a31077f4c510ecc3191cb06',
    name: 'Hardy Rose',
    company: 'VITRICOMP',
    email: 'hardyrose@vitricomp.com',
  },
  {
    key: '5a31077f34020dd36d0664dc',
    name: 'Paula Vega',
    company: 'ZAGGLES',
    email: 'paulavega@zaggles.com',
  },
  {
    key: '5a31077fc65bcaa56e5c67af',
    name: 'Walsh Rivas',
    company: 'STELAECOR',
    email: 'walshrivas@stelaecor.com',
  },
  {
    key: '5a31077fb31ef51116bd75a2',
    name: 'Petersen Mccarthy',
    company: 'BUGSALL',
    email: 'petersenmccarthy@bugsall.com',
  },
  {
    key: '5a31077ff6c9b331ed9a783c',
    name: 'Velez Galloway',
    company: 'LUDAK',
    email: 'velezgalloway@ludak.com',
  },
  {
    key: '5a31077f59f4d18f7dba4469',
    name: 'Frederick Ramos',
    company: 'MALATHION',
    email: 'frederickramos@malathion.com',
  },
  {
    key: '5a31077f436b0f7d87d69b10',
    name: 'Karyn Ruiz',
    company: 'SONGBIRD',
    email: 'karynruiz@songbird.com',
  },
  {
    key: '5a31077fdb4064ab8a767ec4',
    name: 'Nancy Poole',
    company: 'ZOGAK',
    email: 'nancypoole@zogak.com',
  },
  {
    key: '5a31077fc7751fc58f3b366d',
    name: 'Robin Pollard',
    company: 'ZEAM',
    email: 'robinpollard@zeam.com',
  },
  {
    key: '5a31077f768b676b28393c7c',
    name: 'May England',
    company: 'ANDERSHUN',
    email: 'mayengland@andershun.com',
  },
  {
    key: '5a31077f4e66cb531720bb6d',
    name: 'Oneil Sherman',
    company: 'PRINTSPAN',
    email: 'oneilsherman@printspan.com',
  },
  {
    key: '5a31077fe92b67de7987b4d3',
    name: 'Davidson Bradford',
    company: 'DATAGEN',
    email: 'davidsonbradford@datagen.com',
  },
  {
    key: '5a31077f3101a6e4f44df7b1',
    name: 'Salinas Swanson',
    company: 'STEELFAB',
    email: 'salinasswanson@steelfab.com',
  },
  {
    key: '5a31077f17e2b9814534d609',
    name: 'Annette Yates',
    company: 'PARLEYNET',
    email: 'annetteyates@parleynet.com',
  },
  {
    key: '5a31077f83b207a9365c5882',
    name: 'Daphne Vang',
    company: 'ECRAZE',
    email: 'daphnevang@ecraze.com',
  },
  {
    key: '5a31077f5c78c8001a3b37e2',
    name: 'Shannon Cabrera',
    company: 'FITCORE',
    email: 'shannoncabrera@fitcore.com',
  },
  {
    key: '5a31077f2a0267fa518ab149',
    name: 'Bright Richmond',
    company: 'SURELOGIC',
    email: 'brightrichmond@surelogic.com',
  },
  {
    key: '5a31077fef84dde2398b5476',
    name: 'Henrietta Finley',
    company: 'MACRONAUT',
    email: 'henriettafinley@macronaut.com',
  },
  {
    key: '5a31077f5518fc07f0a342b8',
    name: 'Thompson Williamson',
    company: 'ATOMICA',
    email: 'thompsonwilliamson@atomica.com',
  },
  {
    key: '5a31077faca88b69780c2c70',
    name: 'Rosario Guthrie',
    company: 'GENMEX',
    email: 'rosarioguthrie@genmex.com',
  },
  {
    key: '5a31077f5f48a0082f831167',
    name: 'Lucas Randall',
    company: 'MANTRO',
    email: 'lucasrandall@mantro.com',
  },
  {
    key: '5a31077f7c0b545d0dfcb0a9',
    name: 'Mccoy Mckee',
    company: 'MAGNAFONE',
    email: 'mccoymckee@magnafone.com',
  },
  {
    key: '5a31077f7e33fd878d77428f',
    name: 'Marquita Oneil',
    company: 'PETIGEMS',
    email: 'marquitaoneil@petigems.com',
  },
  {
    key: '5a31077f612dbe58ed173c45',
    name: 'Carol Bray',
    company: 'MYOPIUM',
    email: 'carolbray@myopium.com',
  },
  {
    key: '5a31077ff911b29e1e235de7',
    name: 'Tommie Beard',
    company: 'AQUAMATE',
    email: 'tommiebeard@aquamate.com',
  },
  {
    key: '5a31077f95f1c402f5476e3a',
    name: 'Maryann Hendricks',
    company: 'POLARIA',
    email: 'maryannhendricks@polaria.com',
  },
  {
    key: '5a31077fb7f7f91fe52c67f5',
    name: 'Maryellen Mccormick',
    company: 'PLASMOS',
    email: 'maryellenmccormick@plasmos.com',
  },
  {
    key: '5a31077f3ee347e8bedc8acc',
    name: 'Patsy Davidson',
    company: 'AUTOGRATE',
    email: 'patsydavidson@autograte.com',
  },
  {
    key: '5a31077fe6efa5f0d88461bc',
    name: 'Letitia Miles',
    company: 'GORGANIC',
    email: 'letitiamiles@gorganic.com',
  },
  {
    key: '5a31077fcf96f73f87d19d53',
    name: 'Alma Donaldson',
    company: 'LIMAGE',
    email: 'almadonaldson@limage.com',
  },
  {
    key: '5a31077f3c29fe34d453ee76',
    name: 'Deanne Sosa',
    company: 'NORSUL',
    email: 'deannesosa@norsul.com',
  },
  {
    key: '5a31077feab2a6ecf8d631f0',
    name: 'Anastasia Humphrey',
    company: 'ESSENSIA',
    email: 'anastasiahumphrey@essensia.com',
  },
  {
    key: '5a31077f435b3f91cb211794',
    name: 'Beasley Melton',
    company: 'VURBO',
    email: 'beasleymelton@vurbo.com',
  },
  {
    key: '5a31077ff8401d5700952ddc',
    name: 'Lane Larsen',
    company: 'QUOTEZART',
    email: 'lanelarsen@quotezart.com',
  },
  {
    key: '5a31077fca48603ebea4d0e3',
    name: 'Buchanan Mcclure',
    company: 'RECRITUBE',
    email: 'buchananmcclure@recritube.com',
  },
  {
    key: '5a31077f2e924b8d4d4e7c3b',
    name: 'Saunders Patrick',
    company: 'DADABASE',
    email: 'saunderspatrick@dadabase.com',
  },
  {
    key: '5a31077f7a32fb6cad442782',
    name: 'Conway Glenn',
    company: 'TWIGGERY',
    email: 'conwayglenn@twiggery.com',
  },
  {
    key: '5a31077f523fa49141e3bb9f',
    name: 'Sandy Emerson',
    company: 'GEEKNET',
    email: 'sandyemerson@geeknet.com',
  },
  {
    key: '5a31077f6a688a8281eec7a1',
    name: 'Socorro Hebert',
    company: 'GADTRON',
    email: 'socorrohebert@gadtron.com',
  },
  {
    key: '5a31077f69db14dce94c8474',
    name: 'Nannie Wyatt',
    company: 'GEEKMOSIS',
    email: 'nanniewyatt@geekmosis.com',
  },
];

export default class App extends Component {
  render() {
    return (
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'grey',
              padding: 10
            }}>
            <View>
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{item.name}</Text>
              <Text>{item.company} - {item.email}</Text>
            </View>
          </View>
        )}
      />
    );
  }
}
