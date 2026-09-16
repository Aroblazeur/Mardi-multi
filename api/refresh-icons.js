export default async function handler(req,res){
  try{
    const r=await fetch('https://mwnhzfmayqvvlcyozrmk.supabase.co/functions/v1/mardi-multi/api/refresh-icons?token=mm-icons-20260916-v1');
    const text=await r.text();
    res.status(r.status).setHeader('content-type','application/json; charset=utf-8').send(text);
  }catch(e){res.status(500).json({error:String(e)})}
}
