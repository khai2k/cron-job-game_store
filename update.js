var { getConnection } = require("./connection.js");
const { IncomingWebhook } = require("ms-teams-webhook");
// Read a url from the environment variables
const url =
  "https://uithcm.webhook.office.com/webhookb2/2413fc7d-57a0-4779-b6f8-f9917fc2212c@2dff09ac-2b3b-4182-9953-2b548e0d0b39/IncomingWebhook/abb1c0e1001a4c9b99be4958ddee91a4/9c49a827-c41d-4713-adc0-0c3d7a4ed552";
// Initialize
const webhook = new IncomingWebhook(url);

const sendMS = async ({ error = false }) => {
  await webhook.send(
    JSON.stringify({
      "@type": "MessageCard",
      "@context": "https://schema.org/extensions",
      summary: "Issue 176715375",
      themeColor: "0078D7",
      title: "Thông báo update data!",
      sections: [
        {
          activityTitle: `Trạng thái: ${error ? "Thất bại" : "Thành công"} `,
          activityImage:
            "data:image/jpeg;base64,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",
        },
      ],
    })
  );
};

const query = {
  TOP_GAME_MONTH:
    "SELECT idGame  FROM Bill GROUP BY idGame ORDER BY COUNT(*) DESC",
  // CAROUSEL:'',
  TOP_GAME_WEEK:
    "SELECT idGame  FROM Bill GROUP BY idGame ORDER BY COUNT(*) DESC",
  MOST_FAVORITE: "SELECT idGame from Game ORDER BY averageRate DESC",
  GAME_ON_SALE:
    "SELECT idGame,Game.idDiscount FROM Game, Discount WHERE Game.idDiscount = Discount.idDiscount",
  // RECENTLY_UPDATE:'',
  // MOST_POPULAR:'',
  NEW_RELEASE: "SELECT idGame FROM Game ORDER BY releaseDate DESC",
  FREE_NOW: "SELECT idGame FROM Game WHERE cost = 0",
  TOP_SELLER: "SELECT idGame  FROM Bill GROUP BY idGame ORDER BY COUNT(*) DESC",
  FREE_GAME: "SELECT idGame FROM Game WHERE cost = 0",
};

const idSuggetion = {
  TOP_GAME_MONTH: "0349ff26-86c3-4153-a0ec-1658f5665017",
  // CAROUSEL:'',
  TOP_GAME_WEEK: "3589922f-33fc-4fa7-a5b8-5f51da1c7e21",
  MOST_FAVORITE: "4a18c062-62a4-42d0-8126-1c2a715713ec",
  GAME_ON_SALE: "60517a9f-95c6-488a-af43-59dbd4b5d29a",
  // RECENTLY_UPDATE:'',
  // MOST_POPULAR:'',
  NEW_RELEASE: "ab5c7ea6-a08e-4bac-9f5f-62aee86452a9",
  FREE_NOW: "dd92844b-b824-4f2b-adf3-68b90afbd198",
  TOP_SELLER: "e266a6b9-16d0-4e08-af70-a052753c7457",
  FREE_GAME: "f364074e-0111-4a55-ab41-f27591796845",
};

const _formatData = (data) => {
  let arrIdGame = [];
  data.forEach((item) => {
    arrIdGame.push(`"${item.idGame}"`);
  });
  return arrIdGame;
};
const update = async () => {
  try {
    const pool = await getConnection();
    for (const key in query) {
      const result = await pool.request().query(query[key]);
      const valueUpdate = _formatData(result.recordset);

      const querySql = `UPDATE Suggestion SET value = N'[${valueUpdate.toString()}]' WHERE idSuggestion = '${
        idSuggetion[key]
      }'`;
      await pool.request().query(querySql);
    }
    sendMS({ error: false });
  } catch (error) {
    sendMS({ error: true });
  }
};

module.exports = { update };
