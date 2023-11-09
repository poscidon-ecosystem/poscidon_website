'use client'
import Query from '@irys/query';
import { NextResponse, NextRequest } from 'next/server';

export default async function GET(req: NextRequest) {

    const blog = new Query({ url: 'https://devnet.irys.xyz/graphql' });

    const results = await blog
      .search('irys:transactions')
      .from(['0x690BF2dB31D39EE0a88fcaC89117b66a588E865a'])

      return NextResponse.json({
        results: `${{results}}`,
      });
  }
