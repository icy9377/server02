const { users } = require('../../models');

module.exports = {
  post: async (req, res) => {
    // TODO : 유저가 회원가입을 했을 때, 회원정보를 데이터베이스에 저장하도록 구현하세요.
    /* 
    1. req.body에서 필요한 정보들을 추출 = 이메일 유저네임 패스워드 추출
    2. 먼저 조회해서 같은 놈이 있는지 확인 없으면 만든다. - findorCreate 
    3. 만들었으면 200번 스테이터스 코드  + 테이블 정보 보내기 
    4. 원래 존재했으면 409번 스테이터스 코드 + 'Already exists user'
      
    */
   console.log(req.body);
     
    const [user, created] = await users.findOrCreate({
      where: { email: req.body.email },
      defaults: {
        username: req.body.username,
        password: req.body.password
      }
    });


    //만약에 이미 만들어져있는 놈이면
    if (!created) {
      res.status(409).send('Already exists user')
    }
    else {
      res.status(200).send(user.dataValues)
    }

  }
};
