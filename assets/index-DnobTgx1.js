(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();const m=[{id:"A",title:"Hello MoonBit",difficulty:"easy",score:100,solvedCount:38,totalAttempts:847,description:'This is a warm-up problem to help you get familiar with MoonBit syntax. Given an integer n, output "Hello, MoonBit!" n times.',input:"The first line contains an integer n (1 ≤ n ≤ 100), representing the number of outputs.",output:'Output n lines, each line being "Hello, MoonBit!"',samples:[{input:"3",output:`Hello, MoonBit!
Hello, MoonBit!
Hello, MoonBit!`}]},{id:"B",title:"Moonlight Sequence",difficulty:"easy",score:150,solvedCount:35,totalAttempts:612,description:"The Moonlight Sequence is a special integer sequence defined as follows: M(1) = 1, M(2) = 1, M(n) = M(n-1) + M(n-2) + n. Given n, calculate the value of M(n).",input:"The first line contains an integer n (1 ≤ n ≤ 40).",output:"Output the value of M(n).",samples:[{input:"5",output:"26"},{input:"10",output:"608"}]},{id:"C",title:"Star Map Connectivity",difficulty:"medium",score:200,solvedCount:24,totalAttempts:485,description:"In the galaxy, there are n stars, and some stars are connected by interstellar routes. You need to determine if starting from star 1, you can reach all other stars. If possible, calculate the minimum number of routes needed.",input:`The first line contains two integers n and m (1 ≤ n ≤ 10^5, 0 ≤ m ≤ 2×10^5), representing the number of stars and routes.
The next m lines each contain two integers u and v, indicating a bidirectional route between star u and star v.`,output:"If all stars can be reached from star 1, output the minimum number of routes needed; otherwise output -1.",samples:[{input:`4 4
1 2
2 3
3 4
1 4`,output:"3"},{input:`3 1
1 2`,output:"-1"}]},{id:"D",title:"Quantum Knapsack",difficulty:"medium",score:250,solvedCount:16,totalAttempts:398,description:'In the quantum world, there are n quantum items, each with volume v[i] and value w[i]. You have a quantum knapsack with capacity W. Due to quantum properties, each item can be in a superposition of "existing" or "not existing", but only one state can be chosen upon measurement. Find the maximum value that can be put into the knapsack.',input:`The first line contains two integers n and W (1 ≤ n ≤ 100, 1 ≤ W ≤ 10000).
The next n lines each contain two integers v[i] and w[i] (1 ≤ v[i], w[i] ≤ 1000).`,output:"Output the maximum value obtainable.",samples:[{input:`3 10
4 5
5 6
6 7`,output:"11"}]},{id:"E",title:"Time Crystal",difficulty:"hard",score:350,solvedCount:8,totalAttempts:312,description:`Time Crystal is a special data structure that supports the following operations:
1. INSERT x t: Insert value x at time point t
2. DELETE t: Delete the value at time point t
3. QUERY t1 t2: Query the sum of all values in time interval [t1, t2]

You need to implement this data structure and process q operations.`,input:`The first line contains an integer q (1 ≤ q ≤ 10^5), representing the number of operations.
The next q lines each contain one operation.`,output:"For each QUERY operation, output the query result.",samples:[{input:`5
INSERT 10 1
INSERT 20 3
INSERT 30 5
QUERY 1 5
QUERY 2 4`,output:`60
20`}]},{id:"F",title:"Galactic Empire",difficulty:"hard",score:500,solvedCount:3,totalAttempts:193,description:`The Galactic Empire consists of n star systems connected by m wormholes. Each wormhole has a stability value s[i], representing the risk of traversing it. The Emperor wants to find a path from the capital (system 1) to the frontier (system n) that minimizes the maximum risk value on the path. Additionally, the Empire has k "space-fold" abilities that can reduce any wormhole's risk to 0. Find the minimum possible maximum risk value under the optimal strategy.`,input:`The first line contains three integers n, m, k (2 ≤ n ≤ 10^5, 1 ≤ m ≤ 2×10^5, 0 ≤ k ≤ m).
The next m lines each contain three integers u, v, s (1 ≤ u, v ≤ n, 1 ≤ s ≤ 10^9).`,output:"Output the minimum possible maximum risk value. If system n cannot be reached, output -1.",samples:[{input:`4 5 1
1 2 5
2 4 8
1 3 3
3 4 7
2 3 2`,output:"5"}]}],f=[{rank:1,username:"bobzhang",score:1550,penalty:"2:35:12",problems:["+","+","+","+","+","+2"]},{rank:2,username:"sunyixua",score:1450,penalty:"3:18:44",problems:["+","+","+","+","+","+4"]},{rank:3,username:"ultracore",score:1300,penalty:"3:52:21",problems:["+","+","+","+","+1","-2"]},{rank:4,username:"Anqur",score:1150,penalty:"4:15:33",problems:["+","+","+","+","-3","-"]},{rank:5,username:"FancyFlame",score:1050,penalty:"4:28:17",problems:["+","+","+1","+","-2","-"]},{rank:6,username:"Glavo",score:1e3,penalty:"4:35:22",problems:["+","+","+","+1","-","-"]},{rank:7,username:"mengzhuo",score:950,penalty:"4:45:09",problems:["+","+","+","+2","-","-"]},{rank:8,username:"MaxXing",score:900,penalty:"4:52:18",problems:["+","+","+","+3","-","-"]},{rank:9,username:"bushe",score:850,penalty:"4:12:38",problems:["+","+","+","-1","-","-"]},{rank:10,username:"roife",score:800,penalty:"4:25:33",problems:["+","+","+1","-","-","-"]},{rank:11,username:"MeowShe",score:750,penalty:"3:58:22",problems:["+","+","+","-","-","-"]},{rank:12,username:"kokic",score:720,penalty:"4:15:47",problems:["+","+","+2","-","-","-"]},{rank:13,username:"ezio",score:700,penalty:"4:33:15",problems:["+","+","+2","-","-","-"]},{rank:14,username:"Lyra",score:680,penalty:"4:42:31",problems:["+","+","+","-2","-","-"]},{rank:15,username:"acaly",score:650,penalty:"4:55:19",problems:["+","+","+1","-","-","-"]},{rank:16,username:"Asterless",score:600,penalty:"5:01:47",problems:["+","+","-2","-","-","-"]},{rank:17,username:"guest_0x0",score:580,penalty:"5:08:33",problems:["+","+","-1","-","-","-"]},{rank:18,username:"Y.C.",score:550,penalty:"4:22:31",problems:["+","+","-","-","-","-"]},{rank:19,username:"Mirava",score:530,penalty:"4:38:15",problems:["+","+","-","-","-","-"]},{rank:20,username:"jiaqing",score:500,penalty:"4:45:19",problems:["+1","+","-","-","-","-"]},{rank:21,username:"dongdengc",score:480,penalty:"4:52:08",problems:["+","+","-2","-","-","-"]},{rank:22,username:"AAAOCAMLpifa",score:450,penalty:"5:12:08",problems:["+","+2","-","-","-","-"]},{rank:23,username:"Mikanrico",score:420,penalty:"5:18:44",problems:["+","+1","-","-","-","-"]},{rank:24,username:"gesila",score:400,penalty:"3:35:42",problems:["+","-1","-","-","-","-"]},{rank:25,username:"Azathoth",score:380,penalty:"5:25:21",problems:["+","+3","-","-","-","-"]},{rank:26,username:"Store.Brain",score:350,penalty:"4:18:55",problems:["+","-","-","-","-","-"]},{rank:27,username:"liuyunzhuihai",score:320,penalty:"5:32:17",problems:["+","-2","-","-","-","-"]},{rank:28,username:"Budingdamo",score:300,penalty:"4:52:33",problems:["+2","-","-","-","-","-"]},{rank:29,username:"sbfq",score:280,penalty:"5:15:42",problems:["+","-","-","-","-","-"]},{rank:30,username:"KCN-judu",score:250,penalty:"3:28:17",problems:["+","-","-","-","-","-"]},{rank:31,username:"Nanachi",score:230,penalty:"5:38:55",problems:["+1","-","-","-","-","-"]},{rank:32,username:"cy",score:200,penalty:"5:05:44",problems:["+3","-","-","-","-","-"]},{rank:33,username:"gjz_00",score:180,penalty:"5:45:22",problems:["+","-3","-","-","-","-"]},{rank:34,username:"xuxi",score:150,penalty:"4:38:21",problems:["+1","-","-","-","-","-"]},{rank:35,username:"I_C_E_Y__",score:130,penalty:"5:52:18",problems:["+2","-","-","-","-","-"]},{rank:36,username:"touchfish",score:100,penalty:"2:15:33",problems:["+","-","-","-","-","-"]},{rank:37,username:"PICO",score:100,penalty:"3:42:18",problems:["+2","-","-","-","-","-"]},{rank:38,username:"sbc",score:100,penalty:"5:58:47",problems:["+","-","-","-","-","-"]},{rank:39,username:"aq",score:80,penalty:"6:05:33",problems:["+4","-","-","-","-","-"]},{rank:40,username:"an",score:60,penalty:"6:12:15",problems:["+2","-","-","-","-","-"]},{rank:41,username:"Hoey",score:50,penalty:"1:55:12",problems:["-3","-","-","-","-","-"]}];let i=null;function r(t,e="error"){const s=document.getElementById("toast"),o=document.getElementById("toast-icon"),n=document.getElementById("toast-message");s.className="toast",s.classList.add(`toast-${e}`),o.textContent=e==="error"?"⚠️":"✓",n.textContent=t,s.classList.add("show"),setTimeout(()=>{s.classList.remove("show")},3e3)}function d(t){document.querySelectorAll(".page").forEach(e=>{e.classList.remove("active")}),document.getElementById(`page-${t}`).classList.add("active"),document.querySelectorAll(".nav-link").forEach(e=>{e.classList.remove("active"),e.dataset.page===t&&e.classList.add("active")}),window.scrollTo(0,0)}function p(){const t=document.getElementById("problems-list");t.innerHTML=m.map(e=>{const s=(e.solvedCount/e.totalAttempts*100).toFixed(1),o=h(e.id);return`
      <tr onclick="showProblemDetail('${e.id}')">
        <td class="col-status">
          <span class="status-icon ${o}">${g(o)}</span>
        </td>
        <td class="col-id">${e.id}</td>
        <td class="col-title problem-title-cell">${e.title}</td>
        <td class="col-difficulty">
          <span class="difficulty-tag difficulty-${e.difficulty}">${y(e.difficulty)}</span>
        </td>
        <td class="col-solved">
          <span class="solve-rate">${e.solvedCount}/${e.totalAttempts} (${s}%)</span>
        </td>
        <td class="col-score">
          <span class="score-value">${e.score}</span>
        </td>
      </tr>
    `}).join("")}function h(t){return i&&{A:"status-solved",B:"status-solved",C:"status-attempted"}[t]||"status-none"}function g(t){switch(t){case"status-solved":return"✓";case"status-attempted":return"✗";default:return"○"}}function y(t){return{easy:"Easy",medium:"Medium",hard:"Hard"}[t]||t}function v(t){const e=m.find(o=>o.id===t);if(!e)return;document.getElementById("problem-title").textContent=`${e.id}. ${e.title}`,document.getElementById("problem-difficulty").textContent=y(e.difficulty),document.getElementById("problem-difficulty").className=`problem-difficulty difficulty-tag difficulty-${e.difficulty}`,document.getElementById("problem-score").textContent=`${e.score} pts`,document.getElementById("problem-description").textContent=e.description,document.getElementById("problem-input").textContent=e.input,document.getElementById("problem-output").textContent=e.output;const s=e.samples.map((o,n)=>`
    <div class="sample-box">
      <div class="sample-input">
        <div class="sample-label">Input #${n+1}</div>
        <div class="sample-content">${o.input}</div>
      </div>
      <div class="sample-output">
        <div class="sample-label">Output #${n+1}</div>
        <div class="sample-content">${o.output}</div>
      </div>
    </div>
  `).join("");document.getElementById("problem-samples").innerHTML=s,document.getElementById("problem-modal").classList.add("active")}function b(){document.getElementById("problem-modal").classList.remove("active")}function k(){const t=document.getElementById("standings-list");t.innerHTML=f.map(e=>{const s=e.rank<=3?`rank-${e.rank}`:"rank-default",o=e.problems.map(n=>{let a="pending",l="-";return n.startsWith("+")?(a="solved",l=n==="+"?"✓":`✓${n.slice(1)}`):n.startsWith("-")&&n.length>1&&(a="attempted",l=n),`<td class="problem-cell ${a}">${l}</td>`}).join("");return`
      <tr>
        <td class="col-rank">
          <span class="rank-badge ${s}">${e.rank}</span>
        </td>
        <td class="col-user">
          <div class="user-cell">
            <span class="user-cell-avatar">👤</span>
            <span>${e.username}</span>
          </div>
        </td>
        <td class="col-score">
          <span class="total-score">${e.score}</span>
        </td>
        <td class="col-penalty">
          <span class="penalty-time">${e.penalty}</span>
        </td>
        ${o}
      </tr>
    `}).join("")}function u(t){document.getElementById(t).classList.add("active")}function c(t){document.getElementById(t).classList.remove("active")}function E(){c("login-modal"),u("register-modal")}function w(){c("register-modal"),u("login-modal")}function I(t){t.preventDefault();const e=document.getElementById("login-email").value,s=document.getElementById("login-password").value;if(!e){r("Please enter your email","error");return}if(!s){r("Please enter your password","error");return}r("Authentication service is currently unavailable","error")}function B(t){t.preventDefault();const e=document.getElementById("register-username").value,s=document.getElementById("register-email").value,o=document.getElementById("register-password").value,n=document.getElementById("register-confirm").value;if(!e){r("Please enter your username","error");return}if(!s){r("Please enter your email","error");return}if(!o){r("Please enter your password","error");return}if(o!==n){r("Passwords do not match","error");return}r("Registration service is currently unavailable","error")}function L(){i=null,x(),p()}function x(){const t=document.getElementById("auth-buttons"),e=document.getElementById("user-info"),s=document.getElementById("user-name");i?(t.style.display="none",e.style.display="flex",s.textContent=i.username):(t.style.display="flex",e.style.display="none")}document.addEventListener("DOMContentLoaded",()=>{p(),k(),document.querySelectorAll(".nav-link").forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),d(t.dataset.page)})}),document.getElementById("login-btn").addEventListener("click",()=>u("login-modal")),document.getElementById("register-btn").addEventListener("click",()=>u("register-modal")),document.getElementById("logout-btn").addEventListener("click",L),document.getElementById("login-form").addEventListener("submit",I),document.getElementById("register-form").addEventListener("submit",B),document.querySelectorAll(".modal").forEach(t=>{t.addEventListener("click",e=>{e.target===t&&t.classList.remove("active")})}),document.addEventListener("keydown",t=>{t.key==="Escape"&&document.querySelectorAll(".modal.active").forEach(e=>{e.classList.remove("active")})})});window.showPage=d;window.showProblemDetail=v;window.closeProblemModal=b;window.closeModal=c;window.switchToRegister=E;window.switchToLogin=w;
