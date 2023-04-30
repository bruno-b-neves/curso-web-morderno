export default function handler(req, res) {

    if(req.method === 'GET') {
        handlerGet(req, res)
    } else {
        Response.status(405).send()
    }
}

function handlerGet(req, res) {
    res.status(200).json({
        id: 3,
        nome: 'Maria',
        email: 'mariamariamaria@xcfmail.com'
    })
}