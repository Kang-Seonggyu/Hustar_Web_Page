"use strict";

const output = {
    home : (req, res)=> {
        res.render("home/index")
    },    
    login : (req, res) => {
        res.render("home/login")
    },    
}

const users = {
    id : ["admin","master","jokekim"],
    pw : ["1234","pw1234","1q2w3e4r"],
};

const process = {
    login : (req, res) => {
        const id = req.body.ID,
            pw = req.body.PW;
        
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.pw[idx] === pw) {
                return res.json({
                    success : true
                });
            };
        }
        return res.json({
            success : false,
            msg : "로그인에 실패 했습니다.",
        })
    }
}

module.exports = {
    output,
    process,
};