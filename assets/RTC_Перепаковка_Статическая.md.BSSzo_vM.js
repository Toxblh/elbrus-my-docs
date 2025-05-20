import{_ as a,c as n,o as p,ae as i}from"./chunks/framework.Cthp9TdA.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"RTC/Перепаковка/Статическая.md","filePath":"RTC/Перепаковка/Статическая.md"}'),l={name:"RTC/Перепаковка/Статическая.md"};function e(t,s,c,r,o,d){return p(),n("div",null,s[0]||(s[0]=[i(`<h3 id="cтатическии-бинарник" tabindex="-1">Cтатический бинарник <a class="header-anchor" href="#cтатическии-бинарник" aria-label="Permalink to &quot;Cтатический бинарник&quot;">​</a></h3><p>Для статического бинарника без особых файлов конфигурации, запуск осуществляется командой вида <code>rtc --path_prefix / -- /путь/к/программе</code></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#!/bin/sh</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exec</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rtc64</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --path_prefix</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> %scdir/storcli64</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">@&quot;</span></span></code></pre></div><details class="details custom-block"><summary>Пример spec файла <code>rtc-storcli.spec</code></summary><blockquote><div class="language-spec vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">spec</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Name: rtc-storcli</span></span>
<span class="line"><span>Version: 1704</span></span>
<span class="line"><span>Release: alt1.E2K.1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Summary: storcli repackaged for use with rtc</span></span>
<span class="line"><span>License: proprietary</span></span>
<span class="line"><span>Group: System/Configuration/Hardware</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Source: storcli64</span></span>
<span class="line"><span>AutoReqProv: no</span></span>
<span class="line"><span>Requires: rtc &gt;= 4.1-alt1.E2K.5</span></span>
<span class="line"><span></span></span>
<span class="line"><span>%define scdir %prefix/libexec</span></span>
<span class="line"><span>%add_debuginfo_skiplist %scdir</span></span>
<span class="line"><span>%set_verify_elf_method none</span></span>
<span class="line"><span></span></span>
<span class="line"><span>%description</span></span>
<span class="line"><span>%summary</span></span>
<span class="line"><span></span></span>
<span class="line"><span>%prep</span></span>
<span class="line"><span></span></span>
<span class="line"><span>%build</span></span>
<span class="line"><span>cat &gt; storcli64.sh &lt;&lt; EOF</span></span>
<span class="line"><span>#!/bin/sh</span></span>
<span class="line"><span>exec rtc64 --path_prefix / -- %scdir/storcli64 &quot;\\$@&quot;</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>%install</span></span>
<span class="line"><span>install -pDm755 %SOURCE0 %buildroot%scdir/storcli64</span></span>
<span class="line"><span>install -pDm755 storcli64.sh %buildroot%_sbindir/storcli64</span></span>
<span class="line"><span></span></span>
<span class="line"><span>%files</span></span>
<span class="line"><span>%_sbindir/*</span></span>
<span class="line"><span>%scdir/storcli64</span></span>
<span class="line"><span></span></span>
<span class="line"><span>%changelog</span></span>
<span class="line"><span>* Fri Oct 14 2022 Michael Shigorin &lt;mike@altlinux.org&gt; 1704-alt1.E2K.1</span></span>
<span class="line"><span>- initial repackage</span></span></code></pre></div></blockquote></details>`,4)]))}const _=a(l,[["render",e]]);export{k as __pageData,_ as default};
