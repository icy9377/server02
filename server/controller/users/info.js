const { users } = require('../../models');

module.exports = {
  get: async (req, res) => {
    // TODO : 유저의 session을 이용하여, 데이터베이스에 있는 정보를 제공하도록 구현하세요.

    //req.body
    //req.session
    //sequelize method 활용하기 

    /*
    1. sequelize method findONe으로 일치하는 항목 찾기 
    2. 세션id를 가지고 있지 않으면 401번 'need user session'
    3. 가지고 있으면 밸류 보내기     
    */

    if (req.session.userId) {
      const data = await users.findOne({ where: { id: req.session.userId } })
      res.status(200).send(data.dataValues);
    }
    else {
      res.status(401).send('need user session')
    }

  }
};
