import { NextApiRequest, NextApiResponse } from "next"

type HelloResponse = {
    name: string
} 
// /api/hello에서 호출될 때의 API작동을 구현한다
export default (req: NextApiRequest, res: NextApiResponse<HelloResponse>) => {
    // 상태 200으로 {"name": "JinYoung"}를 반환한다
    res.status(200).json({name: 'JinYoung'})
}