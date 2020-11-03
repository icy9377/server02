const { users } = require('../../models');

module.exports = {
  post: async (req, res) => {
    // TODO : 유저가 로그인을 했을 때, 회원정보를 데이터베이스에서 확인하고, 회원의 id를 session에 담아주도록 구현하세요.

    /*
    1. findOne에 where 조건은 이메일,패스워드이 같은 놈
    2. 없으면 404에 'unvalid user'
    3. 있으면 세션 객체에 테이블 아이디 값을 담으면 될 것 같습니다. 
    4. 있으면 200번에 id 값을 보낸다.
    */


    const userData = await users.findOne({ where: { email: req.body.email, password: req.body.password } });
    

    if (userData === null) {
      res.status(404).send('unvalid user')
    }
    else {
      let data = userData.dataValues
      req.session.userId = data.id

      res.send({ id: data.id })
    }








  }
};
