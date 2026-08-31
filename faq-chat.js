/**
 * FAQ CHAT WIDGET — Eve's Wardrobe Rescue
 * --------------------------------------------------
 * A simple, rule-based question-answering box — not real AI,
 * just careful keyword matching against a list of common
 * questions. Free, instant, and never sends anything anywhere.
 *
 * This script builds its own floating chat button and window,
 * so you only need ONE line added to index.html — no other
 * HTML editing required.
 */

const FAQ = [
  {
    keywords: ['split', 'percentage', 'percent', 'money', 'how much', '50', '30', '20'],
    answer: "Every sale splits three ways: 50% to you, 30% to me for doing the work, and 20% to a charity you choose. Try the calculator further up the page — type in a price and see it split instantly."
  },
  {
    keywords: ['paid', 'payment', 'pay', 'when do i get', 'how long'],
    answer: "Once your item sells, I send your 50% and your charity's 20% within 5 days of the money clearing on Vinted."
  },
  {
    keywords: ['what can i send', 'what do you take', 'what items', 'accept', 'sell'],
    answer: "I take clothes, shoes, bags, belts, scarves, jewellery, toys, and home items. I don't currently take beauty products or furniture. Check the 'What I can and can't sell' section for the full list."
  },
  {
    keywords: ['stain', 'damaged', 'condition', 'quality', 'ripped', 'broken'],
    answer: "Please only send items in good, sellable condition — no stains, rips, broken zips, or missing pieces. The full checklist is in the 'What I can and can't sell' section above."
  },
  {
    keywords: ['status', 'check', 'where is my item', 'track'],
    answer: "You can check your item's status anytime using our status page — just enter your name and the code I gave you."
  },
  {
    keywords: ['charity', 'charities', 'donate', 'donation'],
    answer: "You choose from three charities when you send your items: Little Lives UK, Tech She Can, and The Toy Project. Your 20% goes straight to whichever one you pick."
  },
  {
    keywords: ["doesn't sell", "does not sell", 'unsold', "60 days", 'not selling'],
    answer: "If an item hasn't sold after 60 days, I'll message you. You choose whether I post it back to you or donate it to charity — nothing gets thrown away."
  },
  {
    keywords: ['how do i send', 'post', 'deliver', 'drop off', 'address'],
    answer: "Message me first with what you've got, and I'll send you the address privately. You can post it, drop it off in person, or send it via a friend."
  },
  {
    keywords: ['contact', 'email', 'reach', 'get in touch', 'question'],
    answer: "You can use the contact form further down the page, or email me directly at eveswardroberescue@gmail.com."
  },
  {
    keywords: ['who are you', 'about', 'eve', 'age', 'old'],
    answer: "I'm Eve — I'm nine years old and I built this whole website myself! I love coding and technology, and I started this to help people sell their old items while raising money for good causes."
  },
  {
    keywords: ['vinted', 'account', '18'],
    answer: "Items are listed on Vinted through an account set up and supervised by my parent, since Vinted requires account holders to be 18 or over."
  }
];

const FALLBACK = "I'm not sure about that one! Try asking about the money split, what I can take, payment timing, or how to check your status — or email eveswardroberescue@gmail.com and I'll help directly.";

function findAnswer(question) {
  const q = question.toLowerCase();
  let bestScore = 0;
  let bestAnswer = null;

  FAQ.forEach(entry => {
    let score = 0;
    entry.keywords.forEach(kw => {
      if (q.includes(kw)) score += kw.split(' ').length; // longer phrase matches count more
    });
    if (score > bestScore) {
      bestScore = score;
      bestAnswer = entry.answer;
    }
  });

  return bestScore > 0 ? bestAnswer : FALLBACK;
}

function buildChatWidget() {
  const bubble = document.createElement('button');
  bubble.id = 'faq-bubble';
  bubble.innerHTML = '💬';
  bubble.style.cssText = 'position:fixed; bottom:20px; right:20px; width:56px; height:56px; border-radius:50%; background:#1E2230; color:#fff; border:none; font-size:1.4rem; cursor:pointer; box-shadow:0 4px 14px rgba(0,0,0,0.25); z-index:900;';
  document.body.appendChild(bubble);

  const panel = document.createElement('div');
  panel.id = 'faq-panel';
  panel.style.cssText = 'position:fixed; bottom:86px; right:20px; width:300px; max-width:calc(100vw - 40px); background:#fff; border-radius:14px; box-shadow:0 8px 30px rgba(0,0,0,0.2); display:none; flex-direction:column; z-index:900; font-family:system-ui, sans-serif; overflow:hidden;';

  panel.innerHTML = `
    <div style="background:#1E2230; color:#fff; padding:0.9rem 1.1rem; font-weight:700;">Got a question?</div>
    <div id="faq-messages" style="padding:1rem; height:280px; overflow-y:auto; font-size:0.88rem; line-height:1.5;">
      <div style="background:#F1F4F9; padding:0.7rem 0.9rem; border-radius:10px; margin-bottom:0.6rem;">Hi! Ask me about the money split, what I can take, payment timing, or anything else about how this works.</div>
    </div>
    <div style="display:flex; border-top:1px solid #DDE2EC;">
      <input id="faq-input" type="text" placeholder="Type a question…" style="flex:1; border:none; padding:0.8rem; font-size:0.88rem; outline:none;">
      <button id="faq-send" style="background:#4A9D5F; color:#fff; border:none; padding:0 1.1rem; cursor:pointer; font-weight:700;">Ask</button>
    </div>
  `;
  document.body.appendChild(panel);

  bubble.addEventListener('click', () => {
    panel.style.display = panel.style.display === 'flex' ? 'none' : 'flex';
  });

  function sendMessage() {
    const input = document.getElementById('faq-input');
    const text = input.value.trim();
    if (!text) return;

    const messages = document.getElementById('faq-messages');

    const userMsg = document.createElement('div');
    userMsg.style.cssText = 'background:#4A7FD4; color:#fff; padding:0.7rem 0.9rem; border-radius:10px; margin-bottom:0.6rem; margin-left:2rem; text-align:right;';
    userMsg.textContent = text;
    messages.appendChild(userMsg);

    const answer = findAnswer(text);
    const botMsg = document.createElement('div');
    botMsg.style.cssText = 'background:#F1F4F9; padding:0.7rem 0.9rem; border-radius:10px; margin-bottom:0.6rem;';
    botMsg.textContent = answer;
    messages.appendChild(botMsg);

    input.value = '';
    messages.scrollTop = messages.scrollHeight;
  }

  document.getElementById('faq-send').addEventListener('click', sendMessage);
  document.getElementById('faq-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage();
  });
}

document.addEventListener('DOMContentLoaded', buildChatWidget);
