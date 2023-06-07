import puppeteer from "puppeteer";


/** Crea una nueva instancia del navegador */

const browser = await puppeteer.launch({
  executablePath:
    "C:\\Users\\Eismer\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe",
  headless: false, // Opcional, para que puedas ver lo que está sucediendo en el navegador
});
const browserWSEndpoint = browser.wsEndpoint();

console.log(browserWSEndpoint);


/*


//const browser = await puppeteer.connect({ browserWSEndpoint: 'ws://localhost:9222/devtools/browser/<id>' });

const page = await browser.newPage();

await page.goto('https://freebitco.in/');
//await page.goto("http://localhost:3000/Horario/login");

// Set screen size
await page.setViewport({ width: 1080, height: 1024 });


//Type into search box
//await page.type("#usernameInput", "automate user Eismer");
//await page.type("#passwordInput", "automate password 1234");

await page.type("#login_form_btc_address", "automate user Eismer");
await page.type("#login_form_password", "automate password 1234");

//<input type="submit" value="ROLL!" id="free_play_form_button" class="free_play_element new_button_style profile_page_button_style">
const btnLogin = "#login-btn";
const freeBTC = "#free_play_form_button";
const loginBTC = "#login_button";

// Wait and click on first result
//const btnLogin = '.free_play_element';

//await page.waitForSelector(loginBTC);
///await page.click(loginBTC);


//await page.waitForSelector(freeBTC);
//await page.click(freeBTC);
// …



//await browser.close();

// (async () => {
//   const browser = await puppeteer.launch({executablePath: 'C:\Users\Eismer\AppData\Local\Google\Chrome\User'});
//  // const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   await page.goto('https://developer.chrome.com/');

//   // Set screen size
//   await page.setViewport({width: 1080, height: 1024});

//   // Type into search box
//   await page.type('.search-box__input', 'automate beyond recorder');

//   // Wait and click on first result
//   const searchResultSelector = '.search-box__link';
//   await page.waitForSelector(searchResultSelector);
//   await page.click(searchResultSelector);

//   // Locate the full title with a unique string
//   const textSelector = await page.waitForSelector(
//     'text/Customize and automate'
//   );
//   const fullTitle = await textSelector?.evaluate(el => el.textContent);

//   // Print the full title
//   console.log('The title of this blog post is "%s".', fullTitle);

//   await browser.close();
// })();



*/