const Survey = require ('../Models/survey')
module.exports={
    handleSurvey:async(req,res) => {
        let newSurvey = {
            name: req.body.Name,
            coreValues: JSON.stringify(req.body["core values"]),
            imposterq: req.body["Do you ever feel like you are an imposter?"],
            distractionsq: req.body["Do you struggle to shut out sounds and distractions that don't bother others?"],
            procrastinateq: req.body["How often do you put things off until the last minute?"],
            organizedq: req.body["How often do you start the day determined to get organized, and end the day feeling defeated?"],
            stayontaskq: req.body["How often is your time and energy taken with coping, staying organized, and holding it together with no time for you?"],
            interruptingq: req.body["When talking to others how often do you finish their sentences, change subjects, or ask questions before they're done talking?"],
        }
        await Survey.create(newSurvey)
        res.status(200).send('success')

    },
    getUserSurveys:async(req,res) => {
        let info = await Survey.findAll()
        res.status(200).send(info)
    }
}