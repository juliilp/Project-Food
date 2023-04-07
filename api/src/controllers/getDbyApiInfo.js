const getDBInfo = require("./getDbInfo")
const getApiInfo = require("./getApiInfo")


const getDbyApiInfo= async () => {
  const dbInfo = await getDBInfo()
  const apiInfo = await getApiInfo()
  const apiydb = apiInfo.concat(dbInfo)
  return apiydb
}

module.exports = getDbyApiInfo