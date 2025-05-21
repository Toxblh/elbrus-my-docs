import{_ as a,c as n,o as i,ae as p}from"./chunks/framework.Cthp9TdA.js";const o=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"RTC/Перепаковка/Динамическая.md","filePath":"RTC/Перепаковка/Динамическая.md"}'),l={name:"RTC/Перепаковка/Динамическая.md"};function e(t,s,c,h,r,d){return i(),n("div",null,s[0]||(s[0]=[p(`<h3 id="динамическии-бинарник" tabindex="-1">Динамический бинарник <a class="header-anchor" href="#динамическии-бинарник" aria-label="Permalink to &quot;Динамический бинарник&quot;">​</a></h3><p>Для запуска x86-приложений на <a href="https://www.altlinux.org/Ports/e2k" title="Ports/e2k" target="_blank" rel="noreferrer">e2k</a> под <a href="https://www.altlinux.org/%D0%AD%D0%BB%D1%8C%D0%B1%D1%80%D1%83%D1%81/rtc" title="Эльбрус/rtc" target="_blank" rel="noreferrer">бинарным транслятором</a> необходимо подготовить окружение, достаточное для выполнения целевого приложения; в случае динамически скомпонованного исполняемого файла это обычно <a href="https://www.altlinux.org/Chroot" title="Chroot" target="_blank" rel="noreferrer">чрут</a> с нужными библиотеками</p><p>Для запуска нам нужен <code>statifier</code></p><div class="info custom-block"><p class="custom-block-title">Что такое <code>statifier</code></p><p>Это утилита, которая превращает динамически слинкованные исполняемые файлы в статически слинкованные.</p><p>То есть, она включает все необходимые библиотеки в один бинарник, который можно запускать без зависимости от системных библиотек.</p></div><p>Установка утилиты для превращения динамических бинарников в статические</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Bm_m9" id="tab-mOnHpRU" checked><label data-title="apt-get" for="tab-mOnHpRU">apt-get</label><input type="radio" name="group-Bm_m9" id="tab-hqdfCX9"><label data-title="epm" for="tab-hqdfCX9">epm</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">su</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> statifier</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">epm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> statifier</span></span></code></pre></div></div></div><p>Действия по упаковке:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Монтируем /proc (нужно statifier&#39;у для анализа зависимостей)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mount</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /proc</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Указываем путь к библиотекам megacli, если они не в стандартных директориях</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> LD_LIBRARY_PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/usr/lib/megacli:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$LD_LIBRARY_PATH</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Создаём статически слинкованный бинарник megacli</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">statifier</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/lib/megacli/megacli.real</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /root/megacli</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Отмонтируем /proc — очищаем после себя</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">umount</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /proc</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Проверяем, использует ли бинарник динамические библиотеки</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># должен показать &quot;not a dynamic executable&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ldd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /root/megacli</span></span></code></pre></div><p>Полученный бинарник без внешних библиотечных зависимостей проверяем на функционирование: <code>/root/megacli -h</code> затем перепаковываем, как <code>rtc-megacli</code></p><details class="details custom-block"><summary><code>rtc-megacli.spec</code></summary><blockquote><div class="language-spec vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">spec</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Name: rtc-megacli</span></span>
<span class="line"><span>Version: 8.07.14</span></span>
<span class="line"><span>Release: alt1.E2K.1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Summary: megacli repackaged for use with rtc</span></span>
<span class="line"><span>License: proprietary</span></span>
<span class="line"><span>Group: System/Configuration/Hardware</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Source: megacli</span></span>
<span class="line"><span>AutoReqProv: no</span></span>
<span class="line"><span>Requires: rtc &gt;= 4.1-alt1.E2K.5</span></span>
<span class="line"><span></span></span>
<span class="line"><span>%define mcdir %prefix/libexec</span></span>
<span class="line"><span>%add_debuginfo_skiplist %mcdir</span></span>
<span class="line"><span>%set_verify_elf_method none</span></span>
<span class="line"><span></span></span>
<span class="line"><span>%description</span></span>
<span class="line"><span>%summary</span></span>
<span class="line"><span></span></span>
<span class="line"><span>%prep</span></span>
<span class="line"><span></span></span>
<span class="line"><span>%build</span></span>
<span class="line"><span>cat &gt; megacli.sh &lt;&lt; EOF</span></span>
<span class="line"><span>#!/bin/sh</span></span>
<span class="line"><span>exec rtc64 --path_prefix / -- %mcdir/megacli &quot;\\$@&quot;</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>%install</span></span>
<span class="line"><span>install -pDm755 %SOURCE0 %buildroot%mcdir/megacli</span></span>
<span class="line"><span>install -pDm755 megacli.sh %buildroot%_sbindir/megacli</span></span>
<span class="line"><span></span></span>
<span class="line"><span>%files</span></span>
<span class="line"><span>%_sbindir/*</span></span>
<span class="line"><span>%mcdir/megacli</span></span>
<span class="line"><span></span></span>
<span class="line"><span>%changelog</span></span>
<span class="line"><span>* Tue Oct 18 2022 Michael Shigorin &lt;mike@altlinux.org&gt; 8.07.14-alt1.E2K.1</span></span>
<span class="line"><span>- initial repackage</span></span></code></pre></div></blockquote></details><p>А после уже делаем вызов так же, будто это уже статика:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#!/bin/sh</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exec</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rtc64</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --path_prefix</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> %mcdir/megacli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">@&quot;</span></span></code></pre></div>`,12)]))}const g=a(l,[["render",e]]);export{o as __pageData,g as default};
