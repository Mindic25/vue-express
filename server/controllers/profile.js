const mongoose = require('mongoose');

const Profile = require('../models/profile');
var AttackMidFielder = require('../models/attackMidfield');
var CenterBack = require('../models/centerBack');
var Fullback = require('../models/fullBack');
var GoalKeeper = require('../models/goalKeeper');
var HoldMidFielder = require('../models/holdMidfielder');
var Striker = require('../models/striker');
//var WideMidFielder = require('../models/wideMidfield');




/* GET All Profile*/

module.exports.profileAll = (req, res, next) => {
  Profile.find()
  .select(' _id first last DOB phone')
  .exec()
  .then(docs => {
    const response = {
      count: docs.length,
      profiles :docs
    }
    //console.log(docs);
    res.status(200).json(response);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  }); 

};

/* GET a single Profile*/     
module.exports.profileone =  (req, res, next) => {
const id = req.params.profileID;
Profile.findById(id)
.exec()
.then(docs => {
res.status(200).json(docs);
})
.catch(err => {
console.log(err);
res.status(500).json({
 error: err 
})
});

}

/* ======================================================================================== */
/* ======================================================================================== */
/* ======================================================================================== */


/* POST */

module.exports.profilepost = (req, res, next) => {

var newProfile = new Profile({
_id: new mongoose.Types.ObjectId(),
first: req.body.first,
last: req.body.last,
DOB: req.body.DOB,
number: req.body.number,
// attackmid : [{ type: Schema.Types.ObjectId, ref: 'AttackMidFielder'}]
});


newProfile.save().then(result => {
console.log(result);
})
.catch(err => console.log(err));
res.status(201).json({
message: 'Handling POST requests....',
createdProfile: newProfile 

}); 
}
/* ======================================================================================== */


module.exports.attackmidpost = (req, res, next) => {

const attackmidfield = new AttackMidFielder({
_id: mongoose.Types.ObjectId(),


/* physiology  */ 
stamina: req.body.stamina,
strength: req.body.strength,
power: req.body.power,
speed: req.body.speed,

/* Tactical */
vision:req.body.vision,
organisation: req.body.organisation,
communication: req.body.communication,

/* Technical_Def */
tackle: req.body.tackle,
pressing: req.body.pressing_opposition,
interceptionA: req.body.interception_anticipation,
def_heading: req.body.def_heading,

/*  Technical_Att */
passing: req.body.passing,
runningB: req.body.running_with_the_ball,
ballcontrol: req.body.ball_control_with_feet,
dribbling: req.body.dribbling,
supportp: req.body.support_play,
crossing: req.body.crossing,
offheading: req.body.off_heading,

/*Psychological */
concentration: req.body.concentration,
motivation: req.body.motivation,
attitude: req.body.attitude,
body_lan: req.body.body_Langauge

//   profile: req.body.profileID
});
attackmidfield
.save()
.then(result => {
console.log(result);
res.status(201).json(result);
})
.catch(err => {
console.log(err);
res.status(500).json({
 error:err,
})
});
}

/* ======================================================================================== */


module.exports.centerbackpost = (req, res, next) => {

const centerback = new CenterBack({
_id: mongoose.Types.ObjectId(),


/* physiology  */ 
stamina: req.body.stamina,
strength: req.body.strength,
power: req.body.power,
speed: req.body.speed,

/* Tactical */
vision:req.body.vision,
organisation: req.body.organisation,
communication: req.body.communication,


/* Technical_Def */
tackle: req.body.tackle,
pressing: req.body.pressing_opposition,
interceptionA: req.body.interception_anticipation,
def_heading: req.body.def_heading,

/*  Technical_Att */
passing: req.body.passing,
runningB: req.body.running_with_the_ball,
ballcontrol: req.body.ball_control_with_feet,
dribbling: req.body.dribbling,
supportp: req.body.support_play,
crossing: req.body.crossing,
offheading: req.body.off_heading,

/*Psychological */
concentration: req.body.concentration,
motivation: req.body.motivation,
attitude: req.body.attitude,
body_lan: req.body.body_Langauge

//   profile: req.body.profileID
});
centerback
.save()
.then(result => {
console.log(result);
res.status(201).json(result);
})
.catch(err => {
console.log(err);
res.status(500).json({
error:err,
})
});

}

/* ======================================================================================== */

module.exports.fullbackpost = (req, res, next) => {

const fullback = new Fullback({
_id: mongoose.Types.ObjectId(),


/* physiology  */ 
stamina: req.body.stamina,
power: req.body.power,
speed: req.body.speed,

/* Tactical */
supportp:req.body.support_play,
crossing: req.body.crossing,
passing: req.body.passing,
runningOffball: req.body.running_of_the_ball,
forcingOffside: req.body.forcing_offside,


/* Technical_Def */
tackle: req.body.tackle,
pressing: req.body.pressing_opposition,
interceptionA: req.body.interception_anticipation,
def_heading: req.body.def_heading,
clearence: req.body.clearence,

/*  Technical_Att */
passing: req.body.passing,
runningB: req.body.running_with_the_ball,
ballcontrol: req.body.ball_control_with_feet,
dribbling: req.body.dribbling,
supportp: req.body.support_play,
crossing: req.body.crossing,
offheading: req.body.off_heading,

/*Psychological */
concentration: req.body.concentration,
motivation: req.body.motivation,
attitude: req.body.attitude,
body_lan: req.body.body_Langauge

//   profile: req.body.profileID
});
fullback
.save()
.then(result => {
console.log(result);
res.status(201).json(result);
})
.catch(err => {
console.log(err);
res.status(500).json({
error:err,
})
});

}

/* ======================================================================================== */
module.exports.goalkeeperpost = (req, res, next) => {

const goalkeeper = new GoalKeeper({
_id: mongoose.Types.ObjectId(),


/* physiology  */ 
agility: req.body.agility,
strength: req.body.strength,
coordination: req.body.coordination,
reactime: req.body.speed.reaction_time,

/* Tactical */
vision:req.body.vision,
organisation: req.body.organisation,
communication: req.body.communication,
distribution: req.body.distribution,

/* Technical_Def */
shotstop: req.body.stop_stopping,
coordination: req.body.coordination,
recovery: req.body.recovery,
speed: req.body.speed,
saves: req.body.saves,
punch: req.body.punch,

/*  Technical_Att */
passing: req.body.passing,
throw: req.body.throw,
ballcontrol: req.body.ball_control_with_feet,
kick: req.body.kick,
tackle: req.body.tackle,


/*Psychological */
concentration: req.body.concentration,
motivation: req.body.motivation,
attitude: req.body.attitude,
body_lan: req.body.body_Langauge

//   profile: req.body.profileID
});
goalkeeper
.save()
.then(result => {
console.log(result);
res.status(201).json(result);
})
.catch(err => {
console.log(err);
res.status(500).json({
error:err,
})
});
}
/* ======================================================================================== */
module.exports.holdmidfieldpost = (req, res, next) => {

  const holdmidfielder = new HoldMidFielder({
  _id: mongoose.Types.ObjectId(),
  
  
  /* physiology  */ 
  stamina: req.body.stamina,
  strength: req.body.strength,
  power: req.body.power,
  speed: req.body.speed,
  
  /* Tactical */
  vision:req.body.vision,
  organisation: req.body.organisation,
  communication: req.body.communication,
  
  /* Technical_Def */
  tackle: req.body.tackle,
  pressing: req.body.pressing_opposition,
  interceptionA: req.body.interception_anticipation,
  def_heading: req.body.def_heading,
  
  /*  Technical_Att */
  passing: req.body.passing,
  runningB: req.body.running_with_the_ball,
  ballcontrol: req.body.ball_control_with_feet,
  dribbling: req.body.dribbling,
  supportp: req.body.support_play,
  crossing: req.body.crossing,
  offheading: req.body.off_heading,
  
  /*Psychological */
  concentration: req.body.concentration,
  motivation: req.body.motivation,
  attitude: req.body.attitude,
  body_lan: req.body.body_Langauge
  
  //   profile: req.body.profileID
  });
  holdmidfielder
  .save()
  .then(result => {
  console.log(result);
  res.status(201).json(result);
  })
  .catch(err => {
  console.log(err);
  res.status(500).json({
  error:err,
  })
  });
  }  

/* ======================================================================================== */

module.exports.strikerpost = (req, res, next) => {

  const striker = new Striker({
  _id: mongoose.Types.ObjectId(),
  
  
  /* physiology  */ 
  stamina: req.body.stamina,
  strength: req.body.strength,
  power: req.body.power,
  speed: req.body.speed,
  
  /* Tactical */
  vision:req.body.vision,
  organisation: req.body.organisation,
  communication: req.body.communication,
  
  /* Technical_Def */
  tackle: req.body.tackle,
  pressing: req.body.pressing_opposition,
  interceptionA: req.body.interception_anticipation,
  def_heading: req.body.def_heading,
  
  /*  Technical_Att */
  passing: req.body.passing,
  runningB: req.body.running_with_the_ball,
  ballcontrol: req.body.ball_control_with_feet,
  dribbling: req.body.dribbling,
  supportp: req.body.support_play,
  crossing: req.body.crossing,
  offheading: req.body.off_heading,
  
  /*Psychological */
  concentration: req.body.concentration,
  motivation: req.body.motivation,
  attitude: req.body.attitude,
  body_lan: req.body.body_Langauge
  
  //   profile: req.body.profileID
  });
  striker
  .save()
  .then(result => {
  console.log(result);
  res.status(201).json(result);
  })
  .catch(err => {
  console.log(err);
  res.status(500).json({
  error:err,
  })
  });
  } 
/* ======================================================================================== */
module.exports.widemidfielderpost = (req, res, next) => {

  const widemidfielder = new WideMidFielder({
  _id: mongoose.Types.ObjectId(),
  
  
  /* physiology  */ 
  stamina: req.body.stamina,
  strength: req.body.strength,
  power: req.body.power,
  speed: req.body.speed,
  
  /* Tactical */
  vision:req.body.vision,
  organisation: req.body.organisation,
  communication: req.body.communication,
  
  /* Technical_Def */
  tackle: req.body.tackle,
  pressing: req.body.pressing_opposition,
  interceptionA: req.body.interception_anticipation,
  def_heading: req.body.def_heading,
  
  /*  Technical_Att */
  passing: req.body.passing,
  runningB: req.body.running_with_the_ball,
  ballcontrol: req.body.ball_control_with_feet,
  dribbling: req.body.dribbling,
  supportp: req.body.support_play,
  crossing: req.body.crossing,
  offheading: req.body.off_heading,
  
  /*Psychological */
  concentration: req.body.concentration,
  motivation: req.body.motivation,
  attitude: req.body.attitude,
  body_lan: req.body.body_Langauge
  
  //   profile: req.body.profileID
  });
  widemidfielder
  .save()
  .then(result => {
  console.log(result);
  res.status(201).json(result);
  })
  .catch(err => {
  console.log(err);
  res.status(500).json({
  error:err,
  })
  });
  } 


/* ======================================================================================== */
/* ======================================================================================== */
/* ======================================================================================== */


/* DELETE */
module.exports.profiledelete =  (req, res, next) => {
     
const id = req.params.profileID;
Profile.remove({_id : id})
.exec()
.then(result => {
res.status(200).json(result);
})
.catch(err => {
console.log(err);
res.status(500).json({
error: err 
})
});
}



/* ======================================================================================== */

/*  UPDATE */
module.exports.profilepatch = (req, res, next) => {
const id = req.params.profileID;
const updateOps = {};
for (const ops of req.body) {
updateOps[ops.propName] = ops.value;
}
Profile.update({_id : id}, { $set: updateOps })
.exec()
.then(result => {
res.status(200).json(result);
})
.catch(err => {
console.log(err);
res.status(500).json({
error: err 
})
});
}



/* GET All Profile*/

module.exports.profileAll = (req, res, next) => {
  Profile.find()
  .select(' _id first last DOB phone')
  .exec()
  .then(docs => {
    const response = {
      count: docs.length,
      profiles :docs
    }
    //console.log(docs);
    res.status(200).json(response);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  }); 

};

/* GET a single Profile*/     
module.exports.profileone =  (req, res, next) => {
const id = req.params.profileID;
Profile.findById(id)
.exec()
.then(docs => {
res.status(200).json(docs);
})
.catch(err => {
console.log(err);
res.status(500).json({
 error: err 
})
});

}

/* ======================================================================================== */
/* ======================================================================================== */
/* ======================================================================================== */


/* POST */

module.exports.profilepost = (req, res, next) => {

var newProfile = new Profile({
_id: new mongoose.Types.ObjectId(),
first: req.body.first,
last: req.body.last,
DOB: req.body.DOB,
number: req.body.number,
// attackmid : [{ type: Schema.Types.ObjectId, ref: 'AttackMidFielder'}]
});


newProfile.save().then(result => {
console.log(result);
})
.catch(err => console.log(err));
res.status(201).json({
message: 'Handling POST requests....',
createdProfile: newProfile 

}); 
}
/* ======================================================================================== */


module.exports.attackmidpost = (req, res, next) => {

const attackmidfield = new AttackMidFielder({
_id: mongoose.Types.ObjectId(),


/* physiology  */ 
stamina: req.body.stamina,
strength: req.body.strength,
power: req.body.power,
speed: req.body.speed,

/* Tactical */
vision:req.body.vision,
organisation: req.body.organisation,
communication: req.body.communication,

/* Technical_Def */
tackle: req.body.tackle,
pressing: req.body.pressing_opposition,
interceptionA: req.body.interception_anticipation,
def_heading: req.body.def_heading,

/*  Technical_Att */
passing: req.body.passing,
runningB: req.body.running_with_the_ball,
ballcontrol: req.body.ball_control_with_feet,
dribbling: req.body.dribbling,
supportp: req.body.support_play,
crossing: req.body.crossing,
offheading: req.body.off_heading,

/*Psychological */
concentration: req.body.concentration,
motivation: req.body.motivation,
attitude: req.body.attitude,
body_lan: req.body.body_Langauge

//   profile: req.body.profileID
});
attackmidfield
.save()
.then(result => {
console.log(result);
res.status(201).json(result);
})
.catch(err => {
console.log(err);
res.status(500).json({
 error:err,
})
});
}

/* ======================================================================================== */


module.exports.centerbackpost = (req, res, next) => {

const centerback = new CenterBack({
_id: mongoose.Types.ObjectId(),


/* physiology  */ 
stamina: req.body.stamina,
strength: req.body.strength,
power: req.body.power,
speed: req.body.speed,

/* Tactical */
vision:req.body.vision,
organisation: req.body.organisation,
communication: req.body.communication,


/* Technical_Def */
tackle: req.body.tackle,
pressing: req.body.pressing_opposition,
interceptionA: req.body.interception_anticipation,
def_heading: req.body.def_heading,

/*  Technical_Att */
passing: req.body.passing,
runningB: req.body.running_with_the_ball,
ballcontrol: req.body.ball_control_with_feet,
dribbling: req.body.dribbling,
supportp: req.body.support_play,
crossing: req.body.crossing,
offheading: req.body.off_heading,

/*Psychological */
concentration: req.body.concentration,
motivation: req.body.motivation,
attitude: req.body.attitude,
body_lan: req.body.body_Langauge

//   profile: req.body.profileID
});
centerback
.save()
.then(result => {
console.log(result);
res.status(201).json(result);
})
.catch(err => {
console.log(err);
res.status(500).json({
error:err,
})
});

}

/* ======================================================================================== */

module.exports.fullbackpost = (req, res, next) => {

const fullback = new Fullback({
_id: mongoose.Types.ObjectId(),


/* physiology  */ 
stamina: req.body.stamina,
power: req.body.power,
speed: req.body.speed,

/* Tactical */
supportp:req.body.support_play,
crossing: req.body.crossing,
passing: req.body.passing,
runningOffball: req.body.running_of_the_ball,
forcingOffside: req.body.forcing_offside,


/* Technical_Def */
tackle: req.body.tackle,
pressing: req.body.pressing_opposition,
interceptionA: req.body.interception_anticipation,
def_heading: req.body.def_heading,
clearence: req.body.clearence,

/*  Technical_Att */
passing: req.body.passing,
runningB: req.body.running_with_the_ball,
ballcontrol: req.body.ball_control_with_feet,
dribbling: req.body.dribbling,
supportp: req.body.support_play,
crossing: req.body.crossing,
offheading: req.body.off_heading,

/*Psychological */
concentration: req.body.concentration,
motivation: req.body.motivation,
attitude: req.body.attitude,
body_lan: req.body.body_Langauge

//   profile: req.body.profileID
});
fullback
.save()
.then(result => {
console.log(result);
res.status(201).json(result);
})
.catch(err => {
console.log(err);
res.status(500).json({
error:err,
})
});

}

/* ======================================================================================== */
module.exports.goalkeeperpost = (req, res, next) => {

const goalkeeper = new AttackMidFielder({
_id: mongoose.Types.ObjectId(),


/* physiology  */ 
stamina: req.body.stamina,
strength: req.body.strength,
power: req.body.power,
speed: req.body.speed,

/* Tactical */
vision:req.body.vision,
organisation: req.body.organisation,
communication: req.body.communication,

/* Technical_Def */
tackle: req.body.tackle,
pressing: req.body.pressing_opposition,
interceptionA: req.body.interception_anticipation,
def_heading: req.body.def_heading,

/*  Technical_Att */
passing: req.body.passing,
runningB: req.body.running_with_the_ball,
ballcontrol: req.body.ball_control_with_feet,
dribbling: req.body.dribbling,
supportp: req.body.support_play,
crossing: req.body.crossing,
offheading: req.body.off_heading,

/*Psychological */
concentration: req.body.concentration,
motivation: req.body.motivation,
attitude: req.body.attitude,
body_lan: req.body.body_Langauge

//   profile: req.body.profileID
});
goalkeeper
.save()
.then(result => {
console.log(result);
res.status(201).json(result);
})
.catch(err => {
console.log(err);
res.status(500).json({
error:err,
})
});
}
/* ======================================================================================== */

module.exports.goalkeeperpost = (req, res, next) => {

const goalkeeper = new GoalKeeper({
_id: mongoose.Types.ObjectId(),


/* physiology  */ 
stamina: req.body.stamina,
strength: req.body.strength,
power: req.body.power,
speed: req.body.speed,

/* Tactical */
vision:req.body.vision,
organisation: req.body.organisation,
communication: req.body.communication,

/* Technical_Def */
tackle: req.body.tackle,
pressing: req.body.pressing_opposition,
interceptionA: req.body.interception_anticipation,
def_heading: req.body.def_heading,

/*  Technical_Att */
passing: req.body.passing,
runningB: req.body.running_with_the_ball,
ballcontrol: req.body.ball_control_with_feet,
dribbling: req.body.dribbling,
supportp: req.body.support_play,
crossing: req.body.crossing,
offheading: req.body.off_heading,

/*Psychological */
concentration: req.body.concentration,
motivation: req.body.motivation,
attitude: req.body.attitude,
body_lan: req.body.body_Langauge

//   profile: req.body.profileID
});
goalkeeper
.save()
.then(result => {
console.log(result);
res.status(201).json(result);
})
.catch(err => {
console.log(err);
res.status(500).json({
error:err,
})
});
}  



/* ======================================================================================== */
/* ======================================================================================== */
/* ======================================================================================== */


/* DELETE */
module.exports.profiledelete =  (req, res, next) => {
     
const id = req.params.profileID;
Profile.remove({_id : id})
.exec()
.then(result => {
res.status(200).json(result);
})
.catch(err => {
console.log(err);
res.status(500).json({
error: err 
})
});
}



/* ======================================================================================== */

/*  UPDATE */
module.exports.profilepatch = (req, res, next) => {
const id = req.params.profileID;
const updateOps = {};
for (const ops of req.body) {
updateOps[ops.propName] = ops.value;
}
Profile.update({_id : id}, { $set: updateOps })
.exec()
.then(result => {
res.status(200).json(result);
})
.catch(err => {
console.log(err);
res.status(500).json({
error: err 
})
});
}