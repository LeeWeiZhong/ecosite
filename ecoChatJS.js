/* JS file for ecoChat bot */

// Heartfelt thanks to Sylvia Pap for making this possible at:
// https://dev.to/sylviapap/make-a-simple-chatbot-with-javascript-1gc

// DOMContentLoaded runs only when HTML code has 
// finished loading.
// EventListener responds when a key is pressed.

document.addEventListener("DOMContentLoaded", () => 
{
  // Select ecoChat textbox
  const ecoChatTextbox = document.getElementById("ecoChat-textbox");
  const ecoChatInputbox = document.getElementById("ecoChat-inputbox");

  // Create bot icon
  let botIcon = document.createElement("img");
  // Assign class and img for bot icon
  botIcon.className = "botIcon"
  botIcon.src = "images/ecoChat-icon.png"
  // Add bot icon to html
  ecoChatTextbox.appendChild(botIcon);

  // Create div for bot reply
  let botReply = document.createElement("div");
  // Assign class for bot reply div
  botReply.className = "botReply";
  // Add reply for div
  botReply.innerHTML = "Hi! Welcome to EcoChat. Ask me about unsustainable/ sustainable, (non-)environmentally friendly brands or type in /help.";
  // Add reply to html
  ecoChatTextbox.appendChild(botReply);

  // Detect user pressing Enter key.
  ecoChatInputbox.addEventListener("keydown", function(e) 
  {
    if (e.code === "Enter") 
    {
      // Get text from <input> in ecoChat.html
      let input = document.getElementById("ecoChat-inputbox").value;

      // Select ecoChat textbox
      const ecoChatTextbox = document.getElementById("ecoChat-textbox");

      // Create user icon
      let userIcon = document.createElement("img");
      // Assign class and img for user icon
      userIcon.className = "userIcon"
      userIcon.src = "images/ecoChat-icon.png"
      // Add user icon to html
      ecoChatTextbox.appendChild(userIcon);

      // Create div for user reply
      let userReply = document.createElement("div");
      // Assign class for user reply div
      userReply.className = "userReply";
      // Add reply for div
      userReply.innerHTML = `${input}`;
      // Add reply to html
      ecoChatTextbox.appendChild(userReply);

      output(input); 
    }
  });

  const ecoChatButton = document.querySelector(".ecoChat-inputButton");

  ecoChatButton.addEventListener("click", clickDetector);

  // Detect user pressing button.
  function clickDetector() {
    // Get text from <input> in ecoChat.html
    let input = document.getElementById("ecoChat-inputbox").value;

    // Select ecoChat textbox
    const ecoChatTextbox = document.getElementById("ecoChat-textbox");

    // Create user icon
    let userIcon = document.createElement("img");
    // Assign class and img for user icon
    userIcon.className = "userIcon"
    userIcon.src = "images/ecoChat-icon.png"
    // Add user icon to html
    ecoChatTextbox.appendChild(userIcon);

    // Create div for user reply
    let userReply = document.createElement("div");
    // Assign class for user reply div
    userReply.className = "userReply";
    // Add reply for div
    userReply.innerHTML = `${input}`;
    // Add reply to html
    ecoChatTextbox.appendChild(userReply);

    output(input); 
  };
});

function output(input) 
{
  let product;
  // Removes everything but word charaters, whitespaces, and digits.
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  
  // Replaces everything on the left of the comma inside the bracket.
  text = text
    .replace(/ a /g, " ")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "");

  // Test for any results after searching bot
  if (compare(trigger, reply, text)) 
  {
    product = compare(trigger, reply, text);
  }
  else 
  {
    // Random phrase if searching fails.
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }

  //clear user input
  document.getElementById("ecoChat-inputbox").value = "";

  // Updates DOM.
  addChat(product);
}

function addChat(product) 
{
  // Select ecoChat textbox
  const ecoChatTextbox = document.getElementById("ecoChat-textbox");

  // Create bot icon
  let botIcon = document.createElement("img");
  // Assign class and img for bot icon
  botIcon.className = "botIcon"
  botIcon.src = "images/ecoChat-icon.png"
  // Add bot icon to html
  ecoChatTextbox.appendChild(botIcon);

  // Create div for bot reply
  let botReply = document.createElement("div");
  // Assign class for bot reply div
  botReply.className = "botReply";
  // Add reply for div
  botReply.innerHTML = `${product}`;
  // Add reply to html
  ecoChatTextbox.appendChild(botReply);

  // Scroll to bottom
  ecoChatTextbox.scrollTop = ecoChatTextbox.scrollHeight - ecoChatTextbox.clientHeight;
}

// If the word or phrase is in the double quotes, 
// do something.
const trigger =
  [
    //0
    [""],

    //1
    ["unsustainable", "nonenvironmentallyfriendly"],

    //2
    ["sustainable", "ecofriendly", "environmentallyfriendly", ],

    //3
    ["why", "reason"],

    //4
    ["help", "assistance"],

    //5
    ["shein"],

    //6
    ["victoriassecret"],

    //7
    ["mango"],

    //8
    ["levis"],

    //9
    ["uniqlo"],

    //10
    ["zalora"],

    //11
    ["adidas"],

    //12
    ["fila"],

    //13
    ["puma"],

    //14
    ["timberland"],

    //15
    ["hm"],

    //16
    ["underarmour"],

    //17
    ["lululemon"],

    //18
    ["nike"],

    //19
    ["louisvuitton"],

    //20
    ["hermes"],

    //21
    ["gucci"],

    //22
    ["camalbak"],

    //23
    ["cottonon"],

    //24
    ["milo", "hp", "lenovo", "dell", "asus", "acer", "xiaomi", "apple", "google", "microsoft", "amazon", "ibm", "walmart", "visa", "ebay", "fedex", "3m", "coca-cola", "nike", "olympics", "disney", "ups", "gap", "world wildlife fund", "apple", "mcdonalds", "pepsi", "target", "microsoft", "shell", "starbucks"],

    //25
    ["bye", "thank you", "okay", "ok"]
  ];

// That something would be to reply with the word or phrase
// inside the double quotes.
const reply =
[
  //0
  ["Hello, may I help you?"],

  //1
  ["Here are some unsustainable brands: " +
    "<ul>" +
    "<li>" +
    "Shein" +
    "</li>" +
    "<li>" +
    "Victoria\'s Secret" +
    "</li>" +
    "<li>" +
    "Mango" +
    "</li>" +
    "<li>" +
    "Fila " +
    "</li>" +
    "<li>" +
    "Underarmour " +
    "</li>" +
    "<li>" +
    "Lululemon" +
    "</li>" +
    "<li>" +
    "Cotton On " +
    "</li>" +
    "<li>" +
    "Louis " +
    "</li>" +
    "<li>" +
    "Hermes " +
    "</li>" +
    "</ul>" +
    "<br> Pick one to know why."],

  //2
  ["Here are some sustainable brands:" +
    "<ul>" +
    "<li>" +
    "Levi\'s " +
    "</li>" +
    "<li>" +
    "UNIQLO" +
    "</li>" +
    "<li>" +
    "Zalora" +
    "</li>" +
    "<li>" +
    "Adidas" +
    "</li>" +
    "<li>" +
    "Timberland" +
    "</li>" +
    "<li>" +
    "H&M" +
    "</li>" +
    "<li>" +
    "Nike" +
    "</li>" +
    "<li>" +
    "Gucci" +
    "</li>" +
    "<li>" +
    "CamelBak" +
    "</li>" +
    "</ul>" +
    "<br> Pick one to know why."],

  //3
  ["Perhaps you could learn more about the topic you're interested in by emailing us at <a href = 'emailto:ecositee@gmail.com'> ecositee@gmail.com"],

  //4
  ["You can type in: unsustainable, non-environmentally friendly, sustainable, eco-friendly, environmentally-friendly, why, reason, Levi's, UNIQLO, Zalora, Adidas, Timberland, H&M, Nike, Gucci, CamelBak, Shein, Victoria's Secret, Mango, Fila, Underarmour, Lululemon, Cotton On, Louis, Hermes"],

  //5
  ["Shein: <br> Although Shein has a social responsibility website to show the company\'s commitments to giving back to society. There have been no forms of third-party certification to verify that Shein has been genuinely contributing to becoming more sustainable environmentally and in other aspects. <br> Shein has been shown to sell their clothes at relatively lower prices compared to other fashion companies and has a fast turnaround time due to their transportation of their goods via airplanes which consumes large amount of fossil fuels, thus having a larger carbon footprint.In addition, there is no evidence to show that Shein pays their factory workers a proper wage which allows the company to operate with low overhead costs.This allows for the company to sell their products at such low prices. (Rating: 3/5) <br> <a href='https://www.greenmatters.com/p/is-shein-bad'> Find out more here. </a>"],

  //6
  ["Victoria\'s Secret: <br> Victoria\'s Secret has little eco-friendly materials in its collection. It has also signed up with Greeenpeace\'s “Detox My Fashion” program back in 2011 which set a deadline to eliminate hazardous chemicals by 2020 from their products. <br>However, the company has not produced any evidence of their progress towards their set goal.The brand has received 21 % -30 % in the Fashion Transparency Index, thus making them less trustworthy.With the onset of the COVID - 19 pandemic, Victoria\'s Secret has shown the lack of policies in protecting suppliers and workers in it supply chain from the impacts of the pandemic. (Rating: 3/5) <br> <a href='https://goodonyou.eco/how-ethical-is-victorias-secret/'> Find out more here. </a>"],

  //7
  ["Mango: <br> The company although disclosing the number of its factories\' greenhouse gas emissions, it has yet to set a target to lower them and have yet to have a plan on how to cut down on such emissions. Mango\'s Code of Conduct has also shown that it only pays their workers the legal minimum wage and not the recommended wages. (Rating: 3/5) <br><a href='https://www.independent.co.uk/news/uk/home-news/which-british-high-street-shops-do-not-pay-their-garment-workers-living-wage-9223733.html'> Find out more here</a>  <a href='https://www.sustainably-chic.com/blog/fast-fashion-brands-to-avoid'>and here.</a>"],

  //8
  ["Levis: <br>  Known for their denim wear, the company has introduced Water < Less which uses up to 96 % less water in the creation of the material which is known for its huge requirements in terms of water usage.In addition, Levi\'s has pledged to gear their entire design and manufacturing process towards sustainability via the usage of 100% sustainably sourced cotton and recycling old jeans into home insulation. (Rating: 3/5) <br> <a href='https://www.forbes.com/sites/blakemorgan/2020/02/24/11-fashion-companies-leading-the-way-in-sustainability/?sh=3bb630916dba'>Find out more here.</a>"],

  //9
  ["Uniqlo: <br Uniqlo has set targets to reduce emission of harmful gasses in its supply chain, however it does not publicly declare its progress in such goals.In terms of labour conditions, it was given the 31 - 40 % on the Fashion Transparency Index.Uniqlo has also failed to provide evidence that it ensures their workers are paid a living wage. It has also made use of some eco - friendly materials and has good policies to audit suppliers in its supply chain but is not taking adequate steps to ensure payment of a living wage for its workers. (Rating: 3/5) <br> <a href='https://goodonyou.eco/how-ethical-is-uniqlo/'>Find out more here.</a>"],

  //10
  ["Zalora: <br> Zalora has shown their commitment to further their sustainability through introducing concrete measures that are geared towards their People and Planet Positive Agenda.The introduction of Earth Edit, Zalora\'s sustainable shopping edit with carefully defined sustainable criteria which includes 5% of Zalora\'s retail branded portfolio. A significant reduction in the impact of its own operations, including diverting 86% of fulfilment centre waste from landfills main to recycling, and sourcing 68% of its delivery and internal packaging from sustainable materials. (Rating: 4/5) <br> <a href='https://global-fashion-group.com/2021/04/22/global-fashion-group-announces-the-release-of-its-inaugural-sustainability-report-in-southeast-asia/ '>Find out more here.</a>"],

  //11
  ["Adidas: <br> Adidas uses a notable amount of eco - friendly materials including recycled materials and has published detailedinformation about its supplier policies, audits and remediation processes.It also has disclosed policies to protect suppliers and workers in its supply chain from the impacts of COVID - 19.(Rating: 4/5)"],

  //12
  ["Fila: <br> Fila ranks very low on the sustainability ranks, as the brand has shown no efforts to help the cause.Due to their very low transparency, we have no information on their audits, their efforts for being environmentally friendly and factory conditions. (Rating: 2/5)"],

  //13
  ["Puma: <br> The company uses some eco - friendly materials in its products and has pledged to eliminate hazardous chemicals in its processes by 2030. However, it sources labour in its final stage of production from countries with extreme risk of labour abuse. (Rating: 3/5)"],

  //14
  ["Timberland <br> Like some other brands, Timberland has made a public commitment to reduce greenhouse gas emissions but is not taking adequate measures to ensure payment of a living wage for its workers. (Rating: 3/5)"],

  //15
  ["H&M <br> H&M is a fast fashion brand that produces several lines per month, however, they do take part in sustainable initiatives, such as sourcing cotton from ethical sources(the Better Cotton Initiative).Overall, they still are a fast fashion brand and no efforts could match up to the damage fast fashion does to the environment. (rating: 3/5)"],

  //16
  ["Underarmour <br> Underarmour has extremely poor environmental ratings as it has no plan to minimize textile waste, implement water reduction initiatives or use eco - friendly materials.The company also has a 21 - 30 % in the Fashion Transparency Index along with having no evidence of providing a living wage or safeguards from the COVID - 19 impact for its supply chain workers. (Rating: 1/5)"],

  //17
  ["Lululemon <br> Lululemon has provided no evidence that they provide a living wage in its supply chain workers and uses few non - eco - friendly materials in their products.It also fails to show any initiatives to reduce the amount of water that it uses to make its products. (Rating: 2/5)"],

  //18
  ["Nike <br> Nike has good policies to audit suppliers in its supply chain but it is not taking adequate steps to ensure payment of a living wage to its workers. (Rating: 3/5)"],

  //19
  ["Louis Vuitton <br> Unlike other brands, Louis Vuitton shows no evidence of minimizing textile waste and it uses minimal eco - friendly materials.In addition, it also uses fur, angora and exotic animal products as materials for its products(Rating 1/5)"],

  //20
  ["Hermes <br> Hermes lacks the use of eco - friendly materials and has no evidence to show that it takes action to reduce or eliminate hazardous chemicals.In addition, the company does not take adequate steps to ensure payment of a living wage for its workers. (Rating 2/5)"],

  //21
  ["Gucci <br> Gucci has made steps to reduce greenhouse gas emissions during its product manufacturing process and has a policy approved by CanopyStyle to prevent deforestation of ancient and endangered forests in its supply chain.However it still currently uses exotic animal skin. (Rating: 3/5)"],

  //22
  ["CamelBak <br> “Our commitment to craft long - lasting and sustainable products is ongoing.We will continually improve the design and make of our products by utilizing sustainable materials and smart manufacturing processes wherever possible,” says CamelBak, meaning that their products are not yet 100 % sustainable and therefore, they are working to reach that goal. (Rating: 3/5)"],

  //23
  ["Cotton On <br> There is no evidence it reduces its carbon and other greenhouse gas emissions in its supply chain.There is no evidence it has taken meaningful action to reduce or eliminate hazardous chemicals.There is no evidence it minimizes textile waste. (Rating: 2/5)"],

  //24
  ["We're sorry, we don't have the description for that. Please add it to this <a href = 'https://forms.gle/aGd46no6t3iGJXpHA'>form</a>, and we will update Ecochat! Thank you."],

  //25
  ["Thank you for using ecochat, we hope you found out more about sustainable and unsustainable brands here. We would love it if you could fill up this <a href = 'https://forms.gle/Vmx6DqTuTXqPN3Kn6'> form </a> to let us know how we're doing!"]
];

// If the bot didn't use any of the triggers, it can use
// these instead.
alternative = 
[
  "I'm sorry?",
  "I didn't catch that.",
  "Please try again",
  "Come again?",
  "I couldn't quite understand your query.",
  "We\'re sorry, we can\'t help you with that. You can post the question in the forum and await a reply!"
];

function compare(triggerArray, replyArray, text) 
{
  let item;

  const textSplit = text.split(" ");
  for (let x = 0; x < triggerArray.length; x++) 
  {
    for (let y = 0; y < triggerArray[x].length; y++) 
    {
      for (let z = 0; z < textSplit.length; z++)
      {
        if (triggerArray[x][y] == textSplit[z])
        {
          // respective response to respective trigger
          if (triggerArray[x].length == replyArray[x].length)
          {
            item = replyArray[x][y];
            break;
          }
          else
          {
            item = replyArray[x][0];
            break;
          }
        }
      }
    }
  }
  return item;
}

