// Confere o parser do RSS do Jusbrasil com um item no formato real do feed (PyRSS2Gen).
import assert from 'node:assert/strict';
import { parseRss } from '../src/lib/jusbrasil.mjs';

const xml = `<rss><channel><item><title>HC: liberdade &amp; cautelares</title><link>https://dr-lauroneto3523.jusbrasil.com.br/artigos/123/hc-liberdade</link><description>
  &lt;font style="font-size:85%%"&gt;&lt;a href=""&gt;&lt;b&gt;HC: liberdade ...&lt;/b&gt;&lt;/a&gt;&lt;br&gt;
  &lt;font size="-1"&gt;&lt;b&gt;&lt;font color="#6f6f6f"&gt;-&lt;/font&gt; &lt;nobr&gt;1 semana atrás&lt;/nobr&gt;&lt;/b&gt;&lt;/font&gt;&lt;br&gt;
  &lt;font size="-1"&gt;A prisão preventiva constitui medida excepcional ...&lt;/font&gt;
</description><pubDate>Mon, 12 Oct 2026 08:32:32 GMT</pubDate></item></channel></rss>`;

assert.deepEqual(parseRss(xml), [{
  id: '123',
  title: 'HC: liberdade & cautelares',
  url: 'https://dr-lauroneto3523.jusbrasil.com.br/artigos/123/hc-liberdade',
  date: '2026-10-12T08:32:32.000Z',
  excerpt: 'A prisão preventiva constitui medida excepcional…',
}]);
console.log('ok: parser do RSS do Jusbrasil');
