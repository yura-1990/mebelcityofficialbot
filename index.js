const express = require('express')
const app = express()
const axios = require('axios')
const path = require("path")
const port = process.env.PORT || 3000;
app.use(express.static('static'))
app.use(express.json());
require('dotenv').config()
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async (ctx) => {
  try {
    await ctx.deleteMessage();
    await bot.telegram.sendMessage(
      ctx.chat.id,
      "Hello 👋 Welcome To MebelCity_Bot",
      {
        reply_markup: {
          inline_keyboard: [
            [
              { text: "🇺🇿 O`zbekcha", callback_data: "btn_uz_0" },
              { text: "🇷🇺 Русский", callback_data: "btn_ru_0" },
            ]
          ],
        },
      }
    );
  } catch (error) {
    console.error(error);
  }
});
/* menu uz */
bot.action("btn_uz_0", async (ctx) => {
  try {
    await ctx.deleteMessage();
    
    await bot.telegram.sendMessage(ctx.chat.id, "🇺🇿 O`zbekcha", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Catalog", callback_data: "btn_uz_1" },
            { text: "Biz bilan bog'lanish", url: "https://t.me/MebelCityOfficial" },
          ],
          [
            { text: "⬅️ Ortga qaytish", callback_data: "btn_uz_3" },
            { text: "🏠 Bosh sahifa", callback_data: "btn_uz_2" },
          ],
        ],
      },
    });
  } catch (error) {
    console.error(error);
  }
});

/* menu ru */
bot.action("btn_ru_0", async (ctx) => {
  try {
    await ctx.deleteMessage();
    
    await bot.telegram.sendMessage(ctx.chat.id, "🇷🇺 Русский", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Каталог", callback_data: "btn_ru_1" },
            { text: "Cвяжитесь с нами", url: "https://t.me/MebelCityOfficial" },
          ],
          [
            { text: "⬅️ Назад", callback_data: "btn_ru_3" },
            { text: "🏠 Домашняя страница", callback_data: "btn_ru_2" },
          ],
        ],
      },
    });
  } catch (error) {
    console.error(error);
  }
});

/* catalog uz */
bot.action("btn_uz_1", async (ctx) => {
  try {
    await ctx.deleteMessage();
    await bot.telegram.sendMessage(ctx.chat.id, "🇺🇿 O`zbekcha", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Offis mebellar toplami", callback_data: "btn_uz_4" },
            { text: "Offis mebellari", callback_data: "btn_uz_5" },
          ],
          [
            { text: "Loft uslubidagi mebellar", callback_data: "btn_uz_6" },
            { text: "Offis yumshoq mebellar toplami", callback_data: "btn_uz_7" },
          ],
          [
            { text: "Bizning salon", callback_data: "btn_uz_8" },
            { text: "Web sahifamizga otish", url: "https://mebelcity.uz" },
          ],
          [
            { text: "⬅️ Ortga qaytish", callback_data: "btn_uz_0" },
            { text: "🏠 Bosh sahifa", callback_data: "btn_uz_2" },
          ],
        ],
      },
    });
  } catch (error) {
    console.error(error);
  }
});
/* catalog ru */
bot.action("btn_ru_1", async (ctx) => {
  try {
    await ctx.deleteMessage();
    await bot.telegram.sendMessage(ctx.chat.id, "🇷🇺 Русский", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Набор Оффисныx мебелов", callback_data: "btn_ru_4" },
            { text: "Оффисные мебели", callback_data: "btn_ru_5" },
          ],
          [
            { text: "Мебель в стиле лофт", callback_data: "btn_ru_6" },
            { text: "Набор мягкого мебели", callback_data: "btn_ru_7" },
          ],
          [
            { text: "Наш салон", callback_data: "btn_ru_8" },
            { text: "Перейти на нашу веб-страницу", url: "https://mebelcity.uz" },
          ],
          [
            { text: "⬅️ Назад", callback_data: "btn_ru_0" },
            { text: "🏠 Домашняя страница", callback_data: "btn_ru_2" },
          ],
        ],
      },
    });
  } catch (error) {
    console.error(error);
  }
});

/* ===== Home Uz ===== */
bot.action('btn_uz_2', async (ctx) => {
  try {
    await ctx.deleteMessage();
    await bot.telegram.sendMessage(ctx.chat.id, "🇺🇿 O`zbekcha", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Catalog", callback_data: "btn_uz_1" },
            { text: "Biz bilan bog'lanish", url: "https://t.me/MebelCityOfficial" },
          ],
          [
            { text: "⬅️ Ortga qaytish", callback_data: "btn_uz_3" },
            { text: "🏠 Bosh sahifa", callback_data: "btn_uz_2" },
          ],
        ],
      },
    });
  } catch (error) {
    console.error(error);
  }
});
/* ===== Home Ru ===== */
bot.action('btn_ru_2', async (ctx) => {
  try {
    await ctx.deleteMessage();
    await bot.telegram.sendMessage(ctx.chat.id, "🇷🇺 Русский", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Каталог", callback_data: "btn_ru_1" },
            { text: "Cвяжитесь с нами", url: "https://t.me/MebelCityOfficial" },
          ],
          [
            { text: "⬅️ Назад", callback_data: "btn_ru_3" },
            { text: "🏠 Домашняя страница", callback_data: "btn_ru_2" },
          ],
        ],
      },
    });
  } catch (error) {
    console.error(error);
  }
});

/* ===== Back UZ ===== */
bot.action('btn_uz_3', async(ctx)=>{
  try {
    await ctx.deleteMessage();
    await bot.telegram.sendMessage(
      ctx.chat.id,
      "Hello 👋 Welcome To MebelCity_Bot",
      {
        reply_markup: {
          inline_keyboard: [
            [
              { text: "🇺🇿 O`zbekcha", callback_data: "btn_uz_0" },
              { text: "🇷🇺 Русский", callback_data: "btn_ru_0" },
            ]
          ],
        },
      }
    );
  } catch (error) {
    console.error(error);
  }
})
/* ===== Back RU===== */
bot.action('btn_ru_3', async(ctx)=>{
  try {
    await ctx.deleteMessage();
    await bot.telegram.sendMessage(
      ctx.chat.id,
      "Hello 👋 Welcome To MebelCity_Bot",
      {
        reply_markup: {
          inline_keyboard: [
            [
              { text: "🇺🇿 O`zbekcha", callback_data: "btn_uz_0" },
              { text: "🇷🇺 Русский", callback_data: "btn_ru_0" },
            ]
          ],
        },
      }
    );
  } catch (error) {
    console.error(error);
  }
})

/* ====== Address UZ===== */
function address(btn, type, lat, lan) {
  bot.action(btn, async (ctx) => {
    try {
      await ctx.deleteMessage();
      await bot.telegram.sendPhoto(ctx.chat.id, {source: './images/bisSalon.jpg', width: 300, height: 200 }, {caption: `${type}`}, );
      await bot.telegram.sendLocation(ctx.chat.id, lat, lan, {reply_markup:{
        inline_keyboard: [
          [
            { text: "⬅️ Ortga qaytish", callback_data: "btn_uz_1" },
            { text: "🏠 Bosh sahifa", callback_data: "btn_uz_2" },
          ],
        ],
      },} );
    } catch (error) {
      console.error(error);
    }
  });
}
/* ====== Address RU===== */
function addressru(btn, type, lat, lan) {
  bot.action(btn, async (ctx) => {
    try {
      await ctx.deleteMessage();
      await bot.telegram.sendPhoto(ctx.chat.id, {source: './images/bisSalon.jpg'}, {caption: `${type}`}, );
      await bot.telegram.sendLocation(ctx.chat.id, lat, lan, {reply_markup:{
        inline_keyboard: [
          [
            { text: "⬅️ Назад", callback_data: "btn_ru_1" },
            { text: "🏠 Домашняя страница", callback_data: "btn_ru_2" },
          ],
        ],
      },} );
    } catch (error) {
      console.error(error);
    }
  });
}
/* UZ */
address(
  "btn_uz_8",
  `Toshkent shaxri, Chilonzor tumani, Kichik xalqa yo’li, Bog’iston 1-chi tor ko’chasi, 58-uy, 2-chi qavat.`,
  41.30150062376062, 69.19410130613433
);
/* RU */
addressru("btn_ru_8",
`Город Ташкент Чиланзарский район Улица Богистон 1-проезд Кичик халка йули, дом 58 (2-этаж).`,
41.30150062376062, 69.19410130613433)
/* ====== Address ===== */


function category(btn, url, title, times, back, back_title, home, home_title, lang) {
  bot.action(btn, async(ctx)=>{
    try {
      await ctx.deleteMessage();
      var rate;
      var time = times 
      await axios.get(`https://mebels.mebelcity.uz/api/${url}`, {headers:{
        'Accept-Language': lang
      }}).then(response => {
        rate = response?.data?.datas
        rate?.forEach((el,i)=>{
          const name = lang=="uz" ? el?.name_uz?.split(" /n ")?.join(" ")?.toString() : el?.name_ru?.split(" /n ")?.join(" ")?.toString()
          const size = lang=="uz" ? el?.size_uz?.split(" /n ")?.join("\n")?.toString() : el?.size_ru?.split(" /n ")?.join("\n")?.toString()
          const line = '______________________'
          bot.telegram.sendPhoto(ctx.chat.id, {url: `https://mebels.mebelcity.uz/storage/${el?.image}`}, {caption: `\n\n${ name }\n${size}\n${el?.price}\n${line}`});
          time += times 
        })  
      })
      
      setTimeout(() => {
        bot.telegram.sendMessage(
          ctx.chat.id, title, {
            reply_markup: {
              inline_keyboard: [
                [
                  { text: `⬅️ ${back_title}`, callback_data: back },
                  { text: `🏠 ${home_title}`, callback_data: home },
                ],
              ],
            },
          }
        )
      }, time);
      
    } catch (error) {
      console.error(error);
    }
  })
}
/* UZ  */
category('btn_uz_4', 'allmebel', 'OFFIS MEBELLAR TOPLAMI', 1000, 'btn_uz_1', 'Ortga qaytish', 'btn_uz_2', 'Bosh sahifa', 'uz')
category('btn_uz_5', 'mebel', 'MEBELLAR TOPLAMI', 200,'btn_uz_1', 'Ortga qaytish', 'btn_uz_2', 'Bosh sahifa', 'uz')
category('btn_uz_6', 'loftmebel', 'LOFT MEBELLAR TOPLAMI', 1000, 'btn_uz_1', 'Ortga qaytish', 'btn_uz_2', 'Bosh sahifa', 'uz')
category('btn_uz_7', 'softmebel', 'YUMSHOQ MEBELLAR TOPLAMI', 1000, 'btn_uz_1', 'Ortga qaytish', 'btn_uz_2', 'Bosh sahifa', 'uz')
/* RU */
category('btn_ru_4', 'allmebel', 'НАБОР ОФИСНЫХ МЕБЕЛОВ', 1000, 'btn_ru_1', 'Назад', 'btn_ru_2', 'Домашняя страница', 'ru')
category('btn_ru_5', 'mebel', 'ОФИСНЫЕ МЕБЕЛИ', 200, 'btn_ru_1', 'Назад', 'btn_ru_2', 'Домашняя страница', 'ru')
category('btn_ru_6', 'loftmebel', 'ОФИСНЫЕ МЕБЕЛИ В СТИЛИ ЛОФТ', 1000, 'btn_ru_1', 'Назад', 'btn_ru_2', 'Домашняя страница', 'ru')
category('btn_ru_7', 'softmebel', 'НАБОР МЯГКОГО МЕБЕЛИ', 1000, 'btn_ru_1', 'Назад', 'btn_ru_2', 'Домашняя страница', 'ru')



bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));