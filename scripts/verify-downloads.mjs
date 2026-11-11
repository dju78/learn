#!/usr/bin/env node
// Verify the exact nine author-supplied ZIPs against their documented SHA-256 digests.
// Usage: node scripts/verify-downloads.mjs
import {readFile,stat} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {join} from 'node:path';
const manifest=JSON.parse(await readFile(new URL('../resources.json',import.meta.url),'utf8'));
const base=new URL('../downloads/',import.meta.url);
let failures=0;
for(const entry of manifest.files){
 const path=new URL(entry.filename,base);
 try{
  const buf=await readFile(path);
  const digest=createHash('sha256').update(buf).digest('hex');
  const good=buf.length===entry.size_bytes && digest===entry.sha256;
  console.log((good?'PASS':'FAIL')+' '+entry.filename+' | '+buf.length+' bytes');
  if(!good){console.error('  Expected size:',entry.size_bytes,'sha256:',entry.sha256);console.error('  Actual sha256:',digest);failures++}
 }catch(e){console.error('MISSING '+entry.filename);failures++}
}
console.log('Total:',manifest.files.length,'files | errors:',failures);
if(failures)process.exitCode=1;
