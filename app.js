var link = "https://api.tripadvisor.com/api/partner/2.0/location/155507?key=e8fe9217-3f08-4ed1-8edf-87adc35c424f"

Set.prototype.intersection = function(setB) {
    var intersection = new Set();
    for (var elem of setB) {
        if (this.has(elem)) {
            intersection.add(elem);
        }
    }
    return intersection;
}

function getData() {
  var locationdata = $.getJSON(link).done(function(data) {
      return data;
    });
  document.getElementById("data").innerHTML = locationdata;
}


function generateMatches() {
  var matches = [];
  var user = data[Math.round(Math.random() * ((data.length - 1) - 0) + 0)];
  var base_city = user.location.split(",")[0];
  var base_interests = new Set(user.favoriteActivities);
  for (var i = 0; i < data.length; i++) {
    if (user._id == data[i]._id) continue;
    if (base_city === data[i].location.split(",")[0]) {
      var interests = new Set(data[i].favoriteActivities);
      var anb = base_interests.intersection(interests);
      if (anb) {
        console.log(data[i].name,anb);
        matches.push(data[i]);
      }
    }
  }
  return matches;
}

var data = 
[
  {
    "_id": "5a084bfa2b52fb049412d994",
    "picture": "https://goo.gl/images/7kgPjD",
    "age": 52,
    "name": "Ines Adkins",
    "gender": "female",
    "phone": "+1 (883) 481-3871",
    "location": "Phoenix, AZ",
    "about": "Do cupidatat culpa esse dolore nulla fugiat sint culpa aliquip. Sint anim Lorem deserunt nostrud mollit cupidatat ut est. Irure exercitation veniam culpa ex labore minim fugiat eu cupidatat do. Ipsum magna elit nisi in aliqua minim sunt consequat. Do aute id ullamco reprehenderit amet occaecat. Laboris dolore eiusmod deserunt id aute exercitation adipisicing. Eiusmod dolore excepteur minim ad cillum occaecat adipisicing dolor.\r\n",
    "favoriteActivities": [
      "Running",
      "Running",
      "Running"
    ]
  },
  {
    "_id": "5a084bfa87d9f122ebe8846a",
    "picture": "https://goo.gl/images/WdG4UT",
    "age": 69,
    "name": "Lupe Tyler",
    "gender": "female",
    "phone": "+1 (883) 532-3237",
    "location": "Philadelphia, PA",
    "about": "Ea labore do ut esse aliquip. Duis esse mollit consectetur aliquip officia ipsum anim aliqua aliquip esse cillum excepteur veniam. Incididunt ea qui pariatur quis. Lorem elit consectetur aute culpa nostrud velit nisi laboris eu consectetur velit voluptate ipsum. Veniam aute ut cillum excepteur sint sit nisi magna laborum.\r\n",
    "favoriteActivities": [
      "Sailing",
      "Sailing",
      "Smoke big weeds"
    ]
  },
  {
    "_id": "5a084bfa9e84fac507fa0162",
    "picture": "https://goo.gl/images/VhF6JX",
    "age": 61,
    "name": "Beck Peck",
    "gender": "male",
    "phone": "+1 (963) 508-2975",
    "location": "Philadelphia, PA",
    "about": "Laborum id non et non ut in adipisicing eiusmod aliquip sit aute aute irure. Reprehenderit cillum ipsum tempor duis amet esse esse do. Sint exercitation occaecat ipsum proident ullamco exercitation incididunt. Duis eu culpa enim ea cillum ipsum occaecat. Laboris aliquip dolor labore consequat eu veniam est veniam reprehenderit ipsum aliquip cupidatat magna. Anim nulla quis officia laboris occaecat quis incididunt commodo pariatur sit dolor cupidatat in. Qui proident non laborum cupidatat laboris pariatur commodo est ex commodo aliquip nostrud dolor.\r\n",
    "favoriteActivities": [
      "Unicycling",
      "Racing",
      "Running"
    ]
  },
  {
    "_id": "5a084bfa8077c8b498a7a354",
    "picture": "https://goo.gl/images/JurtNN",
    "age": 34,
    "name": "Hendricks Lawson",
    "gender": "male",
    "phone": "+1 (999) 546-2714",
    "location": "Los Angeles, CA",
    "about": "Occaecat exercitation incididunt ut eu dolor sunt fugiat est do adipisicing reprehenderit do velit. Irure velit velit Lorem in sint aute amet est velit non consectetur et veniam non. Sit nulla laboris est do eu Lorem. Consectetur exercitation labore culpa consequat ullamco anim dolore Lorem consectetur excepteur. Quis minim sit cillum irure ad sit do amet aliquip irure Lorem magna dolore est.\r\n",
    "favoriteActivities": [
      "Bodybuilding",
      "Racing",
      "Smoke big weeds"
    ]
  },
  {
    "_id": "5a084bfadec1f04744ed1910",
    "picture": "https://goo.gl/images/1txPR6",
    "age": 52,
    "name": "Jeannine Fleming",
    "gender": "female",
    "phone": "+1 (836) 463-3988",
    "location": "Philadelphia, PA",
    "about": "Nulla dolore ipsum elit irure quis incididunt labore velit. Id nostrud aliquip et aliquip amet anim ullamco. Amet veniam ullamco deserunt ipsum id. Sint culpa ea est sit sint duis ipsum irure. Deserunt quis ullamco laborum reprehenderit tempor tempor excepteur dolor sint in mollit nostrud labore veniam. Non proident cupidatat exercitation nulla ullamco qui elit laboris sint culpa aute esse.\r\n",
    "favoriteActivities": [
      "Sailing",
      "Racing",
      "Smoke big weeds"
    ]
  },
  {
    "_id": "5a084bfaf62e99bd4d30f715",
    "picture": "https://goo.gl/images/WdG4UT",
    "age": 43,
    "name": "Greene Maldonado",
    "gender": "male",
    "phone": "+1 (969) 576-3843",
    "location": "Los Angeles, CA",
    "about": "Sunt exercitation non exercitation nulla. Officia consequat sit est deserunt amet quis occaecat. Nostrud ea in sunt aliqua minim laboris id do ex anim aliqua. Lorem ullamco ea aliqua commodo tempor exercitation fugiat nulla aliquip elit aliqua consequat velit. Esse voluptate aliquip fugiat in veniam minim ullamco cillum non in. Culpa exercitation consectetur aute irure veniam ullamco id duis.\r\n",
    "favoriteActivities": [
      "Unicycling",
      "Running",
      "Smoke big weeds"
    ]
  },
  {
    "_id": "5a084bfaa0752caf2793798d",
    "picture": "https://goo.gl/images/JurtNN",
    "age": 47,
    "name": "Manning Whitley",
    "gender": "male",
    "phone": "+1 (830) 447-2552",
    "location": "Los Angeles, CA",
    "about": "Velit occaecat Lorem nostrud irure elit ullamco laboris occaecat non officia ut. Ipsum ullamco est irure reprehenderit nisi. Enim labore dolor esse deserunt mollit adipisicing ipsum excepteur velit aliquip eiusmod cupidatat consequat ipsum. Deserunt eu qui incididunt eiusmod incididunt nostrud. Lorem irure officia aliqua esse non eiusmod est. Sit anim fugiat eiusmod et veniam ipsum minim aliquip magna do adipisicing duis id cupidatat.\r\n",
    "favoriteActivities": [
      "Bodybuilding",
      "Smoke big weeds",
      "Sailing"
    ]
  },
  {
    "_id": "5a084bfa4fca072ea6b24048",
    "picture": "https://goo.gl/images/7kgPjD",
    "age": 58,
    "name": "Oneal Burks",
    "gender": "male",
    "phone": "+1 (988) 573-3680",
    "location": "New York, NY",
    "about": "Nostrud aliquip irure quis officia id est. Officia cupidatat in tempor proident eiusmod ipsum et cillum. Consectetur magna incididunt non laboris proident. Mollit non adipisicing adipisicing et eu dolor elit commodo dolor aliquip. Irure consequat nisi aliquip culpa sint nostrud consequat veniam ad deserunt nulla eiusmod.\r\n",
    "favoriteActivities": [
      "Smoke big weeds",
      "Running",
      "Unicycling"
    ]
  },
  {
    "_id": "5a084bfa7bf802be1161da39",
    "picture": "https://goo.gl/images/PUxvFB",
    "age": 32,
    "name": "Kristine Wallace",
    "gender": "female",
    "phone": "+1 (847) 420-2196",
    "location": "Chicago, IL",
    "about": "Magna magna est esse fugiat esse laborum aliquip tempor. Proident culpa sunt quis nisi excepteur ea ea consectetur cillum. Eu ad laborum do Lorem magna labore qui consequat do anim voluptate dolore ad.\r\n",
    "favoriteActivities": [
      "Unicycling",
      "Smoke big weeds",
      "Unicycling"
    ]
  },
  {
    "_id": "5a084bfac3c7e5763b1854ba",
    "picture": "https://goo.gl/images/1txPR6",
    "age": 48,
    "name": "Kristen Hill",
    "gender": "female",
    "phone": "+1 (949) 526-2814",
    "location": "Los Angeles, CA",
    "about": "Aute aliquip anim laborum eiusmod est. In ex anim ea sunt enim. Aute labore dolore eu ad qui consectetur.\r\n",
    "favoriteActivities": [
      "Bodybuilding",
      "Racing",
      "Sailing"
    ]
  },
  {
    "_id": "5a084bfa650450354829af06",
    "picture": "https://goo.gl/images/amFoHW",
    "age": 28,
    "name": "Austin Anthony",
    "gender": "male",
    "phone": "+1 (902) 467-2930",
    "location": "San Diego, CA",
    "about": "Culpa minim sint Lorem nulla exercitation ipsum amet esse tempor incididunt pariatur cillum ad aliquip. Eu eiusmod sint adipisicing eu incididunt ex ullamco. Quis proident quis ullamco duis cillum non aute sint incididunt laboris proident. Consequat veniam pariatur reprehenderit ea id. Adipisicing exercitation et laborum occaecat Lorem in. Nulla anim quis esse eiusmod ea eiusmod aliquip occaecat nisi exercitation elit eu excepteur.\r\n",
    "favoriteActivities": [
      "Smoke big weeds",
      "Racing",
      "Unicycling"
    ]
  },
  {
    "_id": "5a084bfa559b00505d380d1f",
    "picture": "https://goo.gl/images/hyA2zK",
    "age": 40,
    "name": "Flossie Richmond",
    "gender": "female",
    "phone": "+1 (911) 408-3188",
    "location": "New York, NY",
    "about": "Sint consectetur incididunt ea laboris officia mollit do non ut Lorem exercitation. Reprehenderit veniam irure adipisicing reprehenderit. Anim sit ut nostrud voluptate elit sit ad nisi aliqua eiusmod dolor ipsum laboris anim. Ullamco consequat non nostrud officia irure consectetur culpa duis qui. Aliquip deserunt minim excepteur labore ea. Dolore sit exercitation ad in commodo velit cillum dolore nulla commodo incididunt.\r\n",
    "favoriteActivities": [
      "Racing",
      "Racing",
      "Racing"
    ]
  },
  {
    "_id": "5a084bfa9974937f45b0e7b3",
    "picture": "https://goo.gl/images/hyA2zK",
    "age": 64,
    "name": "Bowman Ellison",
    "gender": "male",
    "phone": "+1 (868) 533-3175",
    "location": "Los Angeles, CA",
    "about": "Fugiat ea enim ullamco laboris elit consequat. Esse pariatur velit ad nostrud dolore ea est eiusmod ullamco aute excepteur excepteur. Velit veniam voluptate nisi esse velit nostrud tempor sint culpa id elit. Aliqua sunt commodo aliquip ad cupidatat officia et sunt. Laborum elit id voluptate aliqua non velit eiusmod. Dolore sit est aliquip commodo officia ullamco esse velit labore eiusmod eu aliqua aliquip nulla.\r\n",
    "favoriteActivities": [
      "Racing",
      "Sailing",
      "Smoke big weeds"
    ]
  },
  {
    "_id": "5a084bfa1fa907569a4ea401",
    "picture": "https://goo.gl/images/VhF6JX",
    "age": 39,
    "name": "Alice Cherry",
    "gender": "female",
    "phone": "+1 (809) 436-2169",
    "location": "Chicago, IL",
    "about": "Reprehenderit fugiat consectetur quis ea veniam occaecat sunt adipisicing ipsum deserunt cupidatat eiusmod exercitation. Consequat deserunt labore minim labore mollit aliquip reprehenderit adipisicing incididunt laboris voluptate eiusmod reprehenderit. Excepteur qui enim Lorem minim exercitation dolore nostrud tempor id non. Mollit ipsum laboris ipsum ad. Aute labore occaecat id laborum occaecat ea ad tempor aliquip fugiat.\r\n",
    "favoriteActivities": [
      "Bodybuilding",
      "Smoke big weeds",
      "Running"
    ]
  },
  {
    "_id": "5a084bfa9f7cbdd9a52c67a0",
    "picture": "https://goo.gl/images/VhHaKV",
    "age": 28,
    "name": "Cheri James",
    "gender": "female",
    "phone": "+1 (863) 575-3258",
    "location": "San Diego, CA",
    "about": "Laborum aute sunt non aliquip amet proident pariatur. Incididunt Lorem Lorem anim tempor adipisicing eu cupidatat esse exercitation fugiat. Officia adipisicing esse proident consequat laboris exercitation enim nisi labore. Nostrud ipsum dolor consectetur labore. Sunt voluptate enim reprehenderit voluptate nisi pariatur ex sint.\r\n",
    "favoriteActivities": [
      "Running",
      "Unicycling",
      "Racing"
    ]
  },
  {
    "_id": "5a084bfac6d4dbf3105b623a",
    "picture": "https://goo.gl/images/RyMUqq",
    "age": 28,
    "name": "Mcpherson Allen",
    "gender": "male",
    "phone": "+1 (918) 400-2545",
    "location": "Chicago, IL",
    "about": "Anim deserunt Lorem anim esse qui in laboris proident. Aliquip aliquip do duis Lorem consectetur elit non voluptate laborum. Aute amet et enim excepteur est voluptate tempor. Consequat eiusmod aliqua ipsum amet. Sunt ad esse sunt id adipisicing ullamco laborum aute nulla et et. Id mollit nisi tempor est eiusmod in. Aute proident laborum commodo excepteur eiusmod nulla laborum pariatur.\r\n",
    "favoriteActivities": [
      "Smoke big weeds",
      "Racing",
      "Sailing"
    ]
  },
  {
    "_id": "5a084bfa29bac8db81f8cc8a",
    "picture": "https://goo.gl/images/VhHaKV",
    "age": 67,
    "name": "Cheryl Compton",
    "gender": "female",
    "phone": "+1 (810) 578-3777",
    "location": "San Diego, CA",
    "about": "Aliqua eiusmod enim nulla aute exercitation incididunt eu non. Consectetur esse duis reprehenderit exercitation. Officia minim sit occaecat fugiat et Lorem. Pariatur irure sint minim sint labore culpa sint cupidatat Lorem elit qui qui aliquip. Eiusmod sint enim nulla nisi mollit minim nulla do aute ex pariatur id. Voluptate reprehenderit reprehenderit et ea minim. Aute voluptate labore dolor duis consequat.\r\n",
    "favoriteActivities": [
      "Racing",
      "Smoke big weeds",
      "Sailing"
    ]
  },
  {
    "_id": "5a084bfaa82b34d2d4ce9983",
    "picture": "https://goo.gl/images/WdG4UT",
    "age": 63,
    "name": "Hurley Summers",
    "gender": "male",
    "phone": "+1 (932) 550-3653",
    "location": "New York, NY",
    "about": "Qui sit et officia excepteur amet ut culpa id anim cillum culpa laborum nulla. Ipsum culpa esse adipisicing Lorem labore consequat elit esse tempor cupidatat exercitation. Excepteur excepteur excepteur aliqua ipsum ut dolor laborum irure consequat dolore excepteur.\r\n",
    "favoriteActivities": [
      "Sailing",
      "Racing",
      "Racing"
    ]
  },
  {
    "_id": "5a084bfa2afbb2ba2f1829a7",
    "picture": "https://goo.gl/images/hyA2zK",
    "age": 62,
    "name": "Terrell Graham",
    "gender": "male",
    "phone": "+1 (895) 558-2903",
    "location": "Los Angeles, CA",
    "about": "Magna velit aliqua culpa commodo consequat ad laborum magna adipisicing cillum nostrud velit quis cillum. Eiusmod ipsum nisi excepteur incididunt deserunt velit sit sunt ipsum adipisicing eu minim. Ea anim nisi voluptate cillum aliqua. Nulla veniam aliqua occaecat nostrud. Tempor consectetur esse ullamco dolore ea magna quis enim. Nisi labore culpa laborum enim occaecat cillum consequat sit nisi in aute veniam est. Tempor excepteur qui sint culpa ut sint in eiusmod aliqua in labore elit nostrud.\r\n",
    "favoriteActivities": [
      "Sailing",
      "Smoke big weeds",
      "Smoke big weeds"
    ]
  },
  {
    "_id": "5a084bfa08adc47afc021f0e",
    "picture": "https://goo.gl/images/xrciGw",
    "age": 60,
    "name": "Staci Price",
    "gender": "female",
    "phone": "+1 (982) 416-3444",
    "location": "San Diego, CA",
    "about": "Labore amet consequat ut dolor ea incididunt ullamco occaecat Lorem nulla. Dolore id amet veniam exercitation elit ipsum laboris quis. Laboris labore proident culpa ex ex nostrud. Amet labore enim non labore. Dolore eiusmod deserunt tempor incididunt quis minim in. Non mollit excepteur labore veniam id amet dolore mollit exercitation cillum do proident duis.\r\n",
    "favoriteActivities": [
      "Sailing",
      "Bodybuilding",
      "Bodybuilding"
    ]
  },
  {
    "_id": "5a084bfa9654d2182c0621ce",
    "picture": "https://goo.gl/images/VhHaKV",
    "age": 33,
    "name": "Susanna Callahan",
    "gender": "female",
    "phone": "+1 (823) 552-2801",
    "location": "Los Angeles, CA",
    "about": "Amet commodo et irure do sit voluptate anim Lorem labore pariatur reprehenderit aute eiusmod dolor. Amet consectetur tempor dolore cillum Lorem do occaecat sunt qui eu exercitation. Labore eiusmod exercitation ad aliqua id minim proident laborum ad Lorem amet eiusmod irure.\r\n",
    "favoriteActivities": [
      "Smoke big weeds",
      "Unicycling",
      "Smoke big weeds"
    ]
  },
  {
    "_id": "5a084bfa4de776f2a81aeccc",
    "picture": "https://goo.gl/images/JurtNN",
    "age": 21,
    "name": "Mcclure Tran",
    "gender": "male",
    "phone": "+1 (956) 570-3505",
    "location": "Dallas, TX",
    "about": "Proident Lorem consequat amet aliquip voluptate consequat laboris fugiat ipsum qui. Culpa laboris enim reprehenderit consequat aute adipisicing anim non qui cupidatat velit et. Sunt consequat aute laboris esse Lorem exercitation amet laborum tempor incididunt pariatur magna. Ullamco consequat esse consequat velit tempor do exercitation eiusmod id excepteur. Mollit deserunt nisi sint veniam amet duis aliquip adipisicing proident pariatur deserunt duis ipsum. Ipsum deserunt minim officia ad cupidatat velit.\r\n",
    "favoriteActivities": [
      "Racing",
      "Smoke big weeds",
      "Running"
    ]
  },
  {
    "_id": "5a084bfa1aa4b60cb764b7d1",
    "picture": "https://goo.gl/images/7kgPjD",
    "age": 41,
    "name": "Wilson Olson",
    "gender": "male",
    "phone": "+1 (995) 421-3359",
    "location": "Dallas, TX",
    "about": "Magna esse elit ipsum tempor dolore reprehenderit est est incididunt fugiat. Anim amet magna ipsum Lorem elit. Aliqua aliquip sit est ipsum magna mollit laboris. Aliqua sit pariatur incididunt Lorem officia velit laboris do duis mollit dolor esse laborum est.\r\n",
    "favoriteActivities": [
      "Racing",
      "Bodybuilding",
      "Bodybuilding"
    ]
  },
  {
    "_id": "5a084bfa4267e3f45d48f496",
    "picture": "https://goo.gl/images/xrciGw",
    "age": 29,
    "name": "Lara Ross",
    "gender": "female",
    "phone": "+1 (863) 466-2692",
    "location": "Phoenix, AZ",
    "about": "Et reprehenderit dolor aliquip incididunt duis mollit elit. Ut officia nostrud elit aute minim. Pariatur quis cillum ad occaecat id eiusmod enim elit ullamco eu ut laboris.\r\n",
    "favoriteActivities": [
      "Sailing",
      "Racing",
      "Bodybuilding"
    ]
  },
  {
    "_id": "5a084bfaec71ccef82da12af",
    "picture": "https://goo.gl/images/hyA2zK",
    "age": 31,
    "name": "Duke Riley",
    "gender": "male",
    "phone": "+1 (802) 583-2627",
    "location": "Phoenix, AZ",
    "about": "Id ullamco exercitation exercitation labore anim ad occaecat labore ea. Laborum fugiat in nostrud irure eu deserunt Lorem culpa. Pariatur cillum sint enim enim eiusmod est excepteur aute excepteur labore do officia. Deserunt officia labore irure non veniam cupidatat tempor in minim. Magna dolor aliqua id nulla. Sit est commodo sunt eu.\r\n",
    "favoriteActivities": [
      "Unicycling",
      "Running",
      "Racing"
    ]
  }
];