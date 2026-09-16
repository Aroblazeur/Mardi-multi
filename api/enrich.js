export default async function handler(req,res){
  try{
    const r=await fetch('https://mwnhzfmayqvvlcyozrmk.supabase.co/functions/v1/mardi-multi/api/enrich-existing?token=mm-enrich-2026-09-16-k7R4pQ');
    const text=await r.text();
    res.status(r.status).setHeader('content-type','application/json; charset=utf-8').send(text);
  }catch(e){res.status(500).json({error:String(e)})}
}
