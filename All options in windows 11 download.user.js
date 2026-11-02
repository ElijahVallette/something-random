// ==UserScript==
// @name     All options in windows 11 download
// @namespace    Elijah Vallette
// @version  2.0.0
// @description  Allows you to use windows 7-11 in windows 11 download iso options! ALERT: this is made by a person called bmsimons on github, I only ported this to userscripts and modified it a bit. their link is https://gist.github.com/bmsimons/f2bc1db9d4bd1e46383ae16714e1d318
// @author       Elijah Vallette
// @match    https://www.microsoft.com/en-us/software-download/windows11
// @match    https://www.microsoft.com/en-us/software-download/windows11arm64
// @match    https://www.microsoft.com/en-us/software-download/windows11?msockid=05518674bf3160e23b729514bee261c9
// @match    https://www.microsoft.com/en-us/software-download/mediafeaturepack
// @match    https://www.microsoft.com/en-us/software-download/windowsinsiderpreviewiso
// @match    https://www.microsoft.com/en-us/software-download/windowsinsiderpreviewserver
// @match    https://www.microsoft.com/en-us/software-download/windowsinsiderpreviewARM64
// @match    https://www.microsoft.com/en-us/software-download/windowsinsiderpreviewSDK
// @match    https://www.microsoft.com/en-us/software-download/windowsinsiderpreviewADK
// @downloadURL https://update.greasyfork.org/scripts/597732/All%20options%20in%20windows%2011%20download.user.js
// @updateURL https://update.greasyfork.org/scripts/597732/All%20options%20in%20windows%2011%20download.meta.js
// ==/UserScript==
javascript:$("select#product-edition").html("<option value selected value='selected'>Select edition</option><option value='3321'>Windows 11 (multi-edition ISO for x64 devices)</option> <option value='3324'>Windows 11 (multi-edition ISO for Arm64) <option value='1217'>Media Feature Pack-Version 1903 (May 2019)</option> <option value='1057'>Media Feature Pack-Version 1809 (Oct 2018)</option> <option value='642'>Media Feature Pack-Version 1803 (Apr 2018)</option> <option value='489'>Media Feature Pack-Version 1709 (Oct 2017)</option> </option><option value='2'>Windows 7 Home Basic SP1 </option><option value='4'>Windows 7 Professional SP1 </option><option value='6'>Windows 7 Home Premium SP1 </option><option value='8'>Windows 7 Ultimate SP1 </option><option value='10'>Windows 7 Home Premium N SP1 </option><option value='12'>Windows 7 Professional N SP1 </option><option value='14'>Windows 7 Ultimate N SP1 </option><option value='16'>Windows 7 Professional K SP1 </option><option value='18'>Windows 7 Professional KN SP1 </option><option value='20'>Windows 7 Home Premium K SP1 </option><option value='22'>Windows 7 Home Premium KN SP1 </option><option value='24'>Windows 7 Ultimate KN SP1 </option><option value='26'>Windows 7 Ultimate K SP1 </option><option value='28'>Windows 7 Starter SP1 </option><option value='48'>Windows 8.1 Single Language </option><option value='52'>Windows 8.1 </option><option value='55'>Windows 8.1 N </option><option value='61'>Windows 8.1 K </option><option value='62'>Windows 8.1 KN </option><option value='68'>Windows 8.1 Professional LE </option><option value='69'>Windows 8.1 Professional LE K </option><option value='70'>Windows 8.1 Professional LE KN </option><option value='71'>Windows 8.1 Professional LE N </option><option value='75'>Windows 10 Education (Academic) - build 10240</option><option value='76'>Windows 10 Education KN (Academic) - build 10240</option><option value='77'>Windows 10 Education N (Academic) - build 10240</option><option value='78'>Windows 10 China Get Genuine Chinese Simplified - build 10240</option><option value='79'>Windows 10 Pro-Home - build 10240</option><option value='80'>Windows 10 ProKN-HomeKN - build 10240</option><option value='81'>Windows 10 ProN-HomeN - build 10240</option><option value='82'>Windows 10 Single Language - build 10240</option><option value='83'>Windows 7 Home Basic SP1 COEM </option><option value='85'>Windows 7 Home Basic SP1 COEM GGK </option><option value='86'>Windows 7 Home Premium N SP1 COEM </option><option value='87'>Windows 7 Home Premium SP1 COEM </option><option value='88'>Windows 7 Home Premium SP1 COEM GGK </option><option value='89'>Windows 7 Home Premium K SP1 COEM </option><option value='90'>Windows 7 Professional N SP1 COEM </option><option value='91'>Windows 7 Professional SP1 COEM </option><option value='92'>Windows 7 Starter SP1 COEM </option><option value='93'>Windows 7 Ultimate K SP1 COEM </option><option value='94'>Windows 7 Ultimate KN SP1 COEM </option><option value='95'>Windows 7 Ultimate N SP1 COEM </option><option value='96'>Windows 7 Ultimate SP1 COEM </option><option value='97'>Windows 7 Home Premium KN SP1 COEM </option><option value='98'>Windows 7 Professional KN SP1 COEM </option><option value='99'>Windows 10 Pro-Home - build 10586 </option><option value='100'>Windows 10 Education - build 10586 </option><option value='101'>Windows 10 Education KN - build 10586 </option><option value='102'>Windows 10 Education N - build 10586 </option><option value='103'>Windows 10 China Get Genuine Chinese Simplified - build 10586</option><option value='104'>Windows 10 ProKN-HomeKN - build 10586 </option><option value='105'>Windows 10 ProN-HomeN - build 10586 </option><option value='106'>Windows 10 Single Language - build 10586 </option><option value='107'>Windows 10 IoT Core Insider Preview - Build 10586 </option><option value='108'>Windows 10 IoT Core Insider Preview - Build 14262 </option>");

$("select#product-edition").append(`
<option value="3886">Experimental (Build 29695.1001) - Future Platforms</option>
<option value="3884">Experimental (Build 29695.1001) - Future Platforms - Enterprise SKU</option>
<option value="3885">Experimental (Build 29695.1001) - Future Platforms - Home China SKU</option>

<option value="3896">Experimental (Build 26340.9767) - 25H2</option>
<option value="3897">Experimental (Build 26340.9767) - 25H2 - Enterprise SKU</option>
<option value="3898">Experimental (Build 26340.9767) - 25H2 - Home China SKU</option>

<option value="3893">Beta (Build 28020.3292) - 26H1</option>
<option value="3892">Beta (Build 28020.3292) - 26H1 - Enterprise SKU</option>
<option value="3894">Beta (Build 28020.3292) - 26H1 - Home China SKU</option>

<option value="3900">Beta (Build 26220.9757) - 25H2</option>
<option value="3901">Beta (Build 26220.9757) - 25H2 - Enterprise SKU</option>
<option value="3902">Beta (Build 26220.9757) - 25H2 - Home China SKU</option>

<option value="3888">Experimental (Build 28120.3302) - 26H1</option>
<option value="3889">Experimental (Build 28120.3302) - 26H1 - Enterprise SKU</option>
<option value="3890">Experimental (Build 28120.3302) - 26H1 - Home China SKU</option>

<option value="3692">Release Preview (Build 26300.9278) - 26H2</option>
<option value="3690">Release Preview (Build 26300.9278) - 26H2 - Enterprise SKU</option>
<option value="3691">Release Preview (Build 26300.9278) - 26H2 - Home China SKU</option>
<option value="3872">Windows Server VNext Preview ISO (Canary) - Build 29683</option>
<option value="3871">Windows Server VNext Preview VHDX (Canary) - Build 29683</option>
<option value="3870">Windows Server VNext Azure Edition Preview ISO (Canary) - Build 29683</option>
<option value="3873">Windows Server VNext Azure Edition Preview VHDX (Canary) - Build 29683</option>
<option value="3054">Windows Server VNext Annual Channel for Containers (Canary) – Build 26085</option>
<option value="3869">Microsoft Server Language and Optional Features Preview (Canary) - Build 29683</option>
<option value="3295">Windows Admin Center "Modernized Gateway" - Build 2511</option>
<option value="3380">Windows 11 Client Arm64 Insider Preview (Experimental) - Build 29576.1000</option>
<option value="3253">Windows 11 Client Arm64 Insider Preview (Dev) - Build 26200.5074</option>
<option value="2198">Windows 11 Client Arm64 Insider Preview (Beta) - Build 26100.1150</option>
<option value="3346">Windows Insider Preview SDK (Canary) - Build 28000</option>
<option value="3233">Windows Insider Preview SDK (Dev) - Build 26100.5733</option>
<option value="3904">Windows ADK Insider Preview (Experimental - Future Platforms) - Build 29695.1001</option>
<option value="3908">Windows ADK Insider Preview (Experimental - 26H2) - Build 26100.9767</option>
<option value="3906">Windows ADK Insider Preview (Experimental - 26H1) - Build 28000.3302</option>
<option value="3905">Windows PE add-on for Windows ADK (Experimental - Future Platforms) - Build 29695.1001</option>
<option value="3909">Windows PE add-on for Windows ADK (Experimental - 26H2) - Build 26100.9767</option>
<option value="3907">Windows PE add-on for Windows ADK (Experimental - 26H1) - Build 28000.3302</option>
<option value="3346">Windows Insider Preview SDK Driver Kit (Canary) - Build 28000</option>
<option value="3233">Windows Insider Preview SDK Driver Kit (Dev) - Build 26100.5733</option>
<option value="3345">Windows Insider Preview WDK (Canary) - Build 28000</option>
<option value="3345">Windows Insider Preview WDK (Dev) - Build 28000</option>
`);
