/* =========================================
   🌍 GLOBAL TRANSLATIONS FILE
   FULL VERSION – INDEX + LEADERBOARD
========================================= */

window.languages = [
    {code:"en", name:"English", flag:"🇺🇸"},
    {code:"jp", name:"Japanese", flag:"🇯🇵"},
    {code:"zh", name:"Chinese", flag:"🇨🇳"},
    {code:"pt", name:"Portuguese", flag:"🇵🇹"},
    {code:"es", name:"Spanish", flag:"🇪🇸"},
    {code:"ru", name:"Russian", flag:"🇷🇺"},
    {code:"tr", name:"Turkish", flag:"🇹🇷"},
    {code:"pl", name:"Polish", flag:"🇵🇱"},
    {code:"kr", name:"Korean", flag:"🇰🇷"},
    {code:"it", name:"Italian", flag:"🇮🇹"},
    {code:"fr", name:"French", flag:"🇫🇷"},
    {code:"gr", name:"Greek", flag:"🇬🇷"}
];

window.translations = {

/* =========================================================
   🇺🇸 ENGLISH
========================================================= */

en:{
home:"Home",
news:"News",
status:"Server Status",
leaderboard:"Leaderboard",
download:"Download",

title:"Dragon's Dogma Online",
subtitle:"Biggest Server • Custom Content • Hardcore",

newsTitle:"Latest News",
news1Title:"Server Opening",
news1Text:"DDON is now live!",
news2Title:"Hardcore Mode",
news2Text:"Hardcore Mode is now live!",

serverStatusTitle:"Server Status",
statusLabel:"Status",
playersLabel:"Players",
online:"Online",
offline:"Offline",
totalPlayers:"Total Players Online",

leaderboardTitle:"Leaderboard",
normalTab:"Normal",
hcTab:"Hardcore",
searchPlaceholder:"Search player...",
level:"Level",
classes:"Classes",
hcSince:"Hardcore Since",
hcStatus:"Status",
alive:"Alive",
dead:"Dead",
noPlayersFound:"No players found",
howToPlay:"How To Play",
wiki:"Wiki",

resetPasswordTitle:"Reset Password",
resetPasswordBtn:"Reset Password",
forgotPassword:"Forgot Password?",
sendResetLink:"Send Reset Link",
RESET_EMAIL_SENT_IF_EXISTS:"If the email exists, a reset link has been sent.",
emailSettings:"Email Settings",
enterEmail:"Enter your email address",
saveEmail:"Save Email",
noEmailSet:"No email address set.",
emailNotVerified:"Email {email} is not verified.",
emailVerified:"Email {email} is verified.",
EMAIL_VERIFICATION_SENT:"Verification email sent.",
SET_EMAIL_FAILED:"Failed to set email.",
INVALID_EMAIL:"Invalid email address.",
EMAIL_VERIFIED_SUCCESS:"Email verified successfully!",
LEADERBOARD_FAILED:"Failed to load leaderboard.",
CHANNEL_STATUS_FAILED:"Failed to load channel status.",
email:"Email",

LOGIN_SUCCESS:"Login successful.",
LOGIN_FAILED:"Login failed.",
LOGIN_SERVER_UNAVAILABLE:"Login server unavailable.",

MISSING_FIELDS:"Missing fields.",
INVALID_USERNAME:"Invalid username.",
USER_NOT_FOUND:"User not found.",
WRONG_PASSWORD:"Wrong password.",

REGISTER_FAILED:"Registration failed.",
REGISTER_SUCCESS:"Account created successfully. You can now login.",

PASSWORD_CHANGED_SUCCESS:"Password changed successfully.",
PASSWORD_TOO_SHORT:"Password must be at least 6 characters.",
PASSWORDS_DONT_MATCH:"Passwords do not match.",

INVALID_TOKEN:"Invalid or expired token.",
NO_TOKEN:"No authentication token provided.",
SUCCESS_PASSWORD_RESET:"Password updated successfully.",

LOGOUT_SUCCESS:"Logged out successfully.",

NOT_LOGGED_IN:"You are not logged in.",
forgotPassword: "Forgot Password?",

UNKNOWN_ERROR:"Unknown error.",
DATABASE_ERROR:"Database error.",
STATUS_FAILED:"Failed to fetch server status.",

CONNECTION_ERROR:"Connection error.",

register:"Register",
enterCredentials:"Please enter username and password.",

dungeon1:"Shadolean Great Temple",
dungeon2:"Hadin Underground Old Road",
dungeon3:"Mysree Barrow",
dungeon4:"The Tunnel Across the Bridge",
dungeon5:"Erte Deenan",

hcFullDescription:
"Experience the biggest update in DDON history — the brand new Hardcore Game Mode! Exclusive to this server! Embark on a thrilling adventure and do not die — because one death means permanent death!",

bossRushDescription:
"Boss Rush Dungeons are Endgame Dungeons accessible only through the Boss Rush Channel. Currently available dungeons are: Shadolean Great Temple, Hadin Underground Old Road, Mysree Barrow (former Ancient Burial Mound), The Tunnel Across the Bridge and our newest dungeon Erte Deenan. Face an intense and challenging endgame experience!",

customFeatures: "Custom Features",
customTitle: "Server Exclusive Features",
customSubtitle: "Features only available on DDON Revival",
hcTitle: "Hardcore Mode",
hcText: "One life only. Permanent death. No party allowed.",
customContentTitle: "Custom Content",
customContentText: "Unique quests, rewards and balance changes.",
eventsTitle: "Special Events",
eventsText: "Seasonal and server-exclusive events.",

cf_block1:"Custom Features",
cf_1:"Courses available!",
cf_2:"Storage Course permanently active (expanded storage & remote access)",
cf_3:"Free refill for Green Revive Gems (no daily limit)",
cf_4:"All Storage Boxes visible in Crafting Rooms",
cf_5:"Party up with 8 players using /invite",

cf_block2:"Custom Content",
cf_6:"Bonus Dungeons are now Endgame Dungeons",
cf_7:"Bonus Dungeon Tickets obtainable via PP Shop",
cf_8:"Current filled Bonus Dungeons: R, XP",

cf_block3:"Quality of Life Systems",
cf_9:"PP Cap increased from 2000 to 2,000,000",
cf_10:"Bazaar expiration increased from 3 to 30 days",
cf_11:"CraftConsumableProductionTimesMax increased to 100",
cf_12:"CraftItemRecycleMax increased to 50",
cf_13:"Golden Dragon Mark increased to 200",
cf_14:"Silver Dragon Mark increased to 500",
cf_15:"Pawns now gain Quest EXP and JP",

cf_block4:"Custom Channels",
cf_16:"Collab Channel with exclusive EXMs",
cf_17:"Custom Enemy Channel with old + new spawns",
cf_18:"Boss Rush Channel with exclusive rewards",

cf_block5:"Collaboration EXMs",
cf_19:"Ghosts & Goblins Collab",
cf_20:"Attack on Titan Collab",
cf_21:"Monster Hunter Collab",
cf_22:"Street Fighter Collab",
cf_23:"Pijama Collab",

accountPanelTitle:"Account Panel",
dashboardTitle:"Dashboard",
charactersTitle:"Characters",

login:"Login",
logout:"Logout",
changePassword:"Change Password",
save:"Save",
cancel:"Cancel",

username:"Username",
password:"Password",
currentPassword:"Current Password",
newPassword:"New Password",
confirmPassword:"Confirm Password",

loginServerUnavailable:"Login server unavailable.",
connectionError:"Connection error.",
loginFailed:"Login failed.",

charactersLoadError:"Could not load characters.",
noCharacters:"No characters found.",
characterApiError:"Character API error.",

passwordsDontMatch:"Passwords do not match.",
unknownError:"Unknown error.",

howto:{
step1Title:"1️⃣ Downloading",
step1Text:"First of all you have to load the main game (~36GB). Just use one of these links:",
fullClient:"Download Full Client",
multiClient:"Download Multipart Version",
quotaInfo:"If you get a 'download quota exceeded' error, add the shortcut to your Drive and download the folder.",

step2Title:"2️⃣ Unzipping",
step2Text:"After downloading, unzip the files using WinRAR or 7Zip. Windows default unpacking does NOT work.",
unzipWarning:"OneDrive does NOT count as a real drive and will not work as install location.",

step3Title:"3️⃣ Starting the Launcher",
step3Text:"Run ddo_launcher.exe as Administrator. Install .NET 9.0 and DirectX if prompted.",

step4Title:"4️⃣ Configuring the Launcher",
step4Text:"Check that the server settings match ddon.org with the correct ports.",

step5Title:"5️⃣ Registering an Account",
step5Text:"Register inside the launcher and choose any account ID and password.",

step6Title:"6️⃣ Starting the Game & Translation",
step6Text:"Click Login to start playing or press the translation icon to install the English patch.",

step7Title:"7️⃣ Beginning the Game",
step7Text:"Complete the tutorial quests to unlock features and follow red markers for the main story."
},

Autoloot:{
autolootTitle: "AutoLoot Configuration",
autolootSearch: "Search Item...",
autolootLanguage: "Item Language",
autolootBlocked: "Blocked Items",
autolootNoBlocked: "No blocked items",
autolootLoading: "Loading items..."
},


downloadLinks:{
    full:"https://onedrive.live.com/?cid=d03bbc39b7e96cf2&id=D03BBC39B7E96CF2%21s41ce4966967e409aa3c76c91656cd3fd&resid=D03BBC39B7E96CF2%21s41ce4966967e409aa3c76c91656cd3fd&e=MOHgnr&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3UvYy9kMDNiYmMzOWI3ZTk2Y2YyL0VXWkp6a0YtbHBwQW84ZHNrV1ZzMF8wQnV3Yi02cDhJZUdFejduLW5zeWFxa1E%5FZT1NT0hnbnI&v=validatepermission",
    multi:"https://drive.google.com/drive/folders/1FOAOGG14IKbK1i0jZGEm94ewBagWx6qw?usp=drive_link",
 },

jobs:{
"Fighter":"Fighter",
"Seeker":"Seeker",
"Hunter":"Hunter",
"Priest":"Priest",
"Shield Sage":"Shield Sage",
"Sorcerer":"Sorcerer",
"Warrior":"Warrior",
"Element Archer":"Element Archer",
"Alchemist":"Alchemist",
"Spirit Lancer":"Spirit Lancer",
"High Scepter":"High Scepter"
}
},

/* =========================================================
   🇯🇵 JAPANESE
========================================================= */

jp:{
home:"ホーム",
news:"ニュース",
status:"サーバー状況",
leaderboard:"ランキング",
download:"ダウンロード",

title:"ドラゴンズドグマオンライン",
subtitle:"最大サーバー • カスタムコンテンツ • ハードコア",

newsTitle:"最新ニュース",
news1Title:"サーバー開始",
news1Text:"DDONが開始しました！",
news2Title:"ハードコアモード",
news2Text:"ハードコアモード開始！",

serverStatusTitle:"サーバー状況",
statusLabel:"状態",
playersLabel:"プレイヤー数",
online:"オンライン",
offline:"オフライン",
totalPlayers:"総オンライン人数",

leaderboardTitle:"ランキング",
normalTab:"通常",
hcTab:"ハードコア",
searchPlaceholder:"プレイヤー検索...",
level:"レベル",
classes:"クラス",
hcSince:"HC開始日",
hcStatus:"状態",
alive:"生存",
dead:"死亡",
noPlayersFound:"プレイヤーが見つかりません",
howToPlay:"遊び方",
wiki:"ウィキ",

Autoloot:{
autolootTitle: "オートルート設定",
autolootSearch: "アイテム検索...",
autolootLanguage: "アイテム言語",
autolootBlocked: "ブロックされたアイテム",
autolootNoBlocked: "ブロックされたアイテムはありません",
autolootLoading: "アイテムを読み込み中..."
},

resetPasswordTitle:"パスワードリセット",
resetPasswordBtn:"パスワードをリセット",
forgotPassword:"パスワードをお忘れですか？",
sendResetLink:"リセットリンクを送信",
RESET_EMAIL_SENT_IF_EXISTS:"メールアドレスが存在する場合、リセットリンクが送信されました。",

emailSettings:"メール設定",
enterEmail:"メールアドレスを入力してください",
saveEmail:"メールを保存",
noEmailSet:"メールアドレスが設定されていません。",
emailNotVerified:"メール {email} は確認されていません。",
emailVerified:"メール {email} は確認済みです。",
EMAIL_VERIFICATION_SENT:"確認メールを送信しました。",
SET_EMAIL_FAILED:"メールの設定に失敗しました。",
INVALID_EMAIL:"無効なメールアドレスです。",
EMAIL_VERIFIED_SUCCESS:"メール認証が完了しました！",

LEADERBOARD_FAILED:"ランキングの読み込みに失敗しました。",
CHANNEL_STATUS_FAILED:"チャンネル状態の読み込みに失敗しました。",
email:"メール",

LOGIN_SUCCESS:"ログイン成功。",
LOGIN_FAILED:"ログイン失敗。",
LOGIN_SERVER_UNAVAILABLE:"ログインサーバーは利用できません。",

MISSING_FIELDS:"未入力の項目があります。",
INVALID_USERNAME:"無効なユーザー名。",
USER_NOT_FOUND:"ユーザーが見つかりません。",
WRONG_PASSWORD:"パスワードが間違っています。",

REGISTER_FAILED:"登録に失敗しました。",
REGISTER_SUCCESS:"アカウントが作成されました。ログインしてください。",

PASSWORD_CHANGED_SUCCESS:"パスワードが変更されました。",
PASSWORD_TOO_SHORT:"パスワードは6文字以上必要です。",
PASSWORDS_DONT_MATCH:"パスワードが一致しません。",

INVALID_TOKEN:"無効または期限切れのトークンです。",
NO_TOKEN:"認証トークンがありません。",
SUCCESS_PASSWORD_RESET:"パスワードが更新されました。",

LOGOUT_SUCCESS:"ログアウトしました。",
NOT_LOGGED_IN:"ログインしていません。",

UNKNOWN_ERROR:"不明なエラー。",
DATABASE_ERROR:"データベースエラー。",
STATUS_FAILED:"サーバーステータスの取得に失敗しました。",
CONNECTION_ERROR:"接続エラー。",

register:"登録",
enterCredentials:"ユーザー名とパスワードを入力してください。",

dungeon1:"シャドリーン大神殿",
dungeon2:"ハディン地下旧道",
dungeon3:"ミスリー墓所",
dungeon4:"橋向こうのトンネル",
dungeon5:"エルテ・ディーナン",

accountPanelTitle:"アカウントパネル",
dashboardTitle:"ダッシュボード",
charactersTitle:"キャラクター",

login:"ログイン",
logout:"ログアウト",
changePassword:"パスワード変更",
save:"保存",
cancel:"キャンセル",

username:"ユーザー名",
password:"パスワード",
currentPassword:"現在のパスワード",
newPassword:"新しいパスワード",
confirmPassword:"パスワード確認",

loginServerUnavailable:"ログインサーバーは利用できません。",
connectionError:"接続エラー。",
loginFailed:"ログインに失敗しました。",

charactersLoadError:"キャラクターを取得できませんでした。",
noCharacters:"キャラクターが見つかりません。",
characterApiError:"キャラクターAPIエラー。",

passwordsDontMatch:"パスワードが一致しません。",
unknownError:"不明なエラー。",


hcFullDescription:
"DDON史上最大のアップデート、新ハードコアモードを体験せよ！このサーバー限定！スリリングな冒険を楽しみ、決して死なないでください — 一度の死が永久死亡を意味します。",

bossRushDescription:
"ボスラッシュダンジョンはエンドゲームダンジョンで、ボスラッシュチャンネルからのみ入場可能です。現在利用可能なダンジョンは、シャドリーン大神殿、ハディン地下旧道、ミスリー墓所（旧・古代埋葬塚）、橋向こうのトンネル、そして最新ダンジョン エルテ・ディーナンです。究極の高難易度エンドゲームに挑戦せよ！",

customFeatures: "カスタム機能",
customTitle: "サーバー限定機能",
customSubtitle: "DDON Revival限定コンテンツ",
hcTitle: "ハードコアモード",
hcText: "1回死亡でキャラクター削除。パーティ不可。",
customContentTitle: "カスタムコンテンツ",
customContentText: "専用クエストと報酬。",
eventsTitle: "特別イベント",
eventsText: "サーバー限定イベント。",

autolootTitle: "自动拾取设置",
autolootSearch: "搜索物品...",
autolootLanguage: "物品语言",
autolootBlocked: "已屏蔽物品",
autolootNoBlocked: "没有屏蔽物品",
autolootLoading: "正在加载物品...",

cf_block1:"カスタム機能",
cf_1:"コース利用可能！",
cf_2:"ストレージコース常時有効（拡張倉庫＋遠隔利用）",
cf_3:"グリーンリバイブジェム無料補充（制限なし）",
cf_4:"全ストレージがクラフトルームで表示",
cf_5:"/inviteで8人パーティ可能",

cf_block2:"カスタムコンテンツ",
cf_6:"ボーナスダンジョンがエンドゲーム仕様に変更",
cf_7:"PPショップでボーナスチケット入手可能",
cf_8:"現在有効なボーナス：R、XP",

cf_block3:"QOLシステム",
cf_9:"PP上限 2,000 → 2,000,000",
cf_10:"バザー期限 3日 → 30日",
cf_11:"消耗品制作上限 100",
cf_12:"リサイクル上限 50",
cf_13:"ゴールドドラゴンマーク 200",
cf_14:"シルバードラゴンマーク 500",
cf_15:"ポーンがクエストEXPとJP取得",

cf_block4:"カスタムチャンネル",
cf_16:"コラボ専用EXMチャンネル",
cf_17:"旧＋新スポーンの敵チャンネル",
cf_18:"ボスラッシュチャンネル",

cf_block5:"コラボEXM",
cf_19:"魔界村コラボ",
cf_20:"進撃の巨人コラボ",
cf_21:"モンスターハンターコラボ",
cf_22:"ストリートファイターコラボ",
cf_23:"パジャマコラボ",

howto:{
step1Title:"1️⃣ ダウンロード",
step1Text:"まずメインゲーム（約36GB）をダウンロードしてください。",
fullClient:"フルクライアント",
multiClient:"マルチパート版",
quotaInfo:"Google Driveの制限エラーが出た場合は、ショートカットを作成してフォルダごとダウンロードしてください。",

step2Title:"2️⃣ 解凍",
step2Text:"WinRAR または 7Zip を使用してください。Windows標準機能は動作しません。",
unzipWarning:"OneDriveはインストール先として使用できません。",

step3Title:"3️⃣ ランチャー起動",
step3Text:"ddo_launcher.exe を管理者として実行してください。",

step4Title:"4️⃣ サーバー設定",
step4Text:"サーバー設定が ddon.org になっていることを確認してください。",

step5Title:"5️⃣ アカウント登録",
step5Text:"ランチャー内でアカウントを登録してください。",

step6Title:"6️⃣ ゲーム開始 & 翻訳",
step6Text:"ログインしてプレイを開始するか、翻訳アイコンで英語パッチを適用してください。",

step7Title:"7️⃣ ゲーム開始",
step7Text:"チュートリアルクエストを完了して機能を解放してください。"
},

downloadLinks:{
    full:"https://1drv.ms/u/c/d03bbc39b7e96cf2/IQA4WanxetY2SrY2msrcqtu4AVT84h0qRbCC-UoVEu3qAz0?e=D7wGLY",
},

jobs:{
"Fighter":"ファイター",
"Seeker":"シーカー",
"Hunter":"ハンター",
"Priest":"プリースト",
"Shield Sage":"シールドセージ",
"Sorcerer":"ソーサラー",
"Warrior":"ウォリアー",
"Element Archer":"エレメントアーチャー",
"Alchemist":"アルケミスト",
"Spirit Lancer":"スピリットランサー",
"High Scepter":"ハイセプター"
}
},

/* =========================================================
   🇨🇳 CHINESE
========================================================= */

zh:{
home:"首页",
news:"新闻",
status:"服务器状态",
leaderboard:"排行榜",
download:"下载",

title:"龙之信条 Online",
subtitle:"最大服务器 • 自定义内容 • 硬核",

newsTitle:"最新消息",
news1Title:"服务器开启",
news1Text:"DDON 已上线！",
news2Title:"硬核模式",
news2Text:"硬核模式已开启！",

serverStatusTitle:"服务器状态",
statusLabel:"状态",
playersLabel:"玩家数",
online:"在线",
offline:"离线",
totalPlayers:"当前在线人数",

leaderboardTitle:"排行榜",
normalTab:"普通",
hcTab:"硬核",
searchPlaceholder:"搜索玩家...",
level:"等级",
classes:"职业",
hcSince:"成为HC时间",
hcStatus:"状态",
alive:"存活",
dead:"死亡",
noPlayersFound:"未找到玩家",
howToPlay:"游戏指南",
wiki:"维基",

resetPasswordTitle:"重置密码",
resetPasswordBtn:"重置密码",
forgotPassword:"忘记密码？",
sendResetLink:"发送重置链接",
RESET_EMAIL_SENT_IF_EXISTS:"如果邮箱存在，重置链接已发送。",

emailSettings:"邮箱设置",
enterEmail:"请输入您的邮箱地址",
saveEmail:"保存邮箱",
noEmailSet:"尚未设置邮箱地址。",
emailNotVerified:"邮箱 {email} 尚未验证。",
emailVerified:"邮箱 {email} 已验证。",
EMAIL_VERIFICATION_SENT:"验证邮件已发送。",
SET_EMAIL_FAILED:"设置邮箱失败。",
INVALID_EMAIL:"无效的邮箱地址。",
EMAIL_VERIFIED_SUCCESS:"邮箱验证成功！",

LEADERBOARD_FAILED:"加载排行榜失败。",
CHANNEL_STATUS_FAILED:"加载频道状态失败。",
email:"邮箱",

LOGIN_SUCCESS:"登录成功。",
LOGIN_FAILED:"登录失败。",
LOGIN_SERVER_UNAVAILABLE:"登录服务器不可用。",

MISSING_FIELDS:"缺少必填字段。",
INVALID_USERNAME:"无效的用户名。",
USER_NOT_FOUND:"未找到用户。",
WRONG_PASSWORD:"密码错误。",

REGISTER_FAILED:"注册失败。",
REGISTER_SUCCESS:"账户创建成功。现在可以登录。",

PASSWORD_CHANGED_SUCCESS:"密码修改成功。",
PASSWORD_TOO_SHORT:"密码必须至少6个字符。",
PASSWORDS_DONT_MATCH:"密码不匹配。",

INVALID_TOKEN:"无效或已过期的令牌。",
NO_TOKEN:"未提供身份验证令牌。",
SUCCESS_PASSWORD_RESET:"密码更新成功。",

LOGOUT_SUCCESS:"已成功登出。",
NOT_LOGGED_IN:"未登录。",

UNKNOWN_ERROR:"未知错误。",
DATABASE_ERROR:"数据库错误。",
STATUS_FAILED:"无法获取服务器状态。",
CONNECTION_ERROR:"连接错误。",

register:"注册",
enterCredentials:"请输入用户名和密码。",

dungeon1:"沙多琳大神殿",
dungeon2:"哈丁地下旧道",
dungeon3:"米斯里古墓",
dungeon4:"桥对面的隧道",
dungeon5:"埃尔特·迪南",

accountPanelTitle:"账户面板",
dashboardTitle:"控制面板",
charactersTitle:"角色",

login:"登录",
logout:"退出登录",
changePassword:"更改密码",
save:"保存",
cancel:"取消",

username:"用户名",
password:"密码",
currentPassword:"当前密码",
newPassword:"新密码",
confirmPassword:"确认密码",

loginServerUnavailable:"登录服务器不可用。",
connectionError:"连接错误。",
loginFailed:"登录失败。",

charactersLoadError:"无法加载角色。",
noCharacters:"未找到角色。",
characterApiError:"角色API错误。",

passwordsDontMatch:"密码不匹配。",
unknownError:"未知错误。",


hcFullDescription:
"体验DDON历史上最大的更新——全新硬核模式！仅限本服务器！展开刺激的冒险，不要死亡——因为一次死亡即永久删除角色！",

bossRushDescription:
"Boss Rush 地下城是终局地下城，仅可通过 Boss Rush 频道进入。目前开放的地下城包括：沙多琳大神殿、哈丁地下旧道、米斯里古墓（原古代墓丘）、桥对面的隧道，以及最新地下城 埃尔特·迪南。迎接紧张而极具挑战性的终局体验！",

customFeatures:"自定义功能",
customTitle:"服务器专属功能",
customSubtitle:"仅在 DDON Revival 可用的功能",

hcTitle:"硬核模式",
hcText:"硬核是全新的自定义游戏模式。体验只有一次生命的冒险 —— 死亡即结束！",

customContentTitle:"自定义内容",
customContentText:"独特的任务、奖励和平衡调整。",
eventsTitle:"特别活动",
eventsText:"服务器专属季节活动。",

cf_block1:"自定义功能",
cf_1:"课程系统开放！",
cf_2:"仓库课程永久开启（扩展仓库+远程访问）",
cf_3:"绿色复活宝石免费补充（无每日限制）",
cf_4:"制作房可查看所有仓库",
cf_5:"使用 /invite 可8人组队",

cf_block2:"自定义内容",
cf_6:"奖励地下城改为终局地下城",
cf_7:"PP商店可获得奖励地下城票",
cf_8:"当前地下城：R、XP",

cf_block3:"优化系统",
cf_9:"PP上限 2,000 → 2,000,000",
cf_10:"拍卖持续时间 3天 → 30天",
cf_11:"制作上限提升至100",
cf_12:"回收上限提升至50",
cf_13:"金龙徽章提升至200",
cf_14:"银龙徽章提升至500",
cf_15:"随从现在获得任务经验与JP",

cf_block4:"自定义频道",
cf_16:"联动专属EXM频道",
cf_17:"旧怪物+新终局刷新频道",
cf_18:"Boss Rush 专属奖励频道",

cf_block5:"联动EXM",
cf_19:"魔界村联动",
cf_20:"进击的巨人联动",
cf_21:"怪物猎人联动",
cf_22:"街头霸王联动",
cf_23:"睡衣联动",

howto:{
step1Title:"1️⃣ 下载",
step1Text:"首先下载主游戏（约36GB）。使用以下链接：",
fullClient:"下载完整客户端",
multiClient:"下载分卷版本",
quotaInfo:"如果出现下载限制错误，请将快捷方式添加到云端硬盘后下载文件夹。",

step2Title:"2️⃣ 解压",
step2Text:"下载完成后使用 WinRAR 或 7Zip 解压。Windows 默认解压无法使用。",
unzipWarning:"OneDrive 不能作为安装路径使用。",

step3Title:"3️⃣ 启动启动器",
step3Text:"以管理员身份运行 ddo_launcher.exe。如提示安装 .NET 9.0 或 DirectX，请安装。",

step4Title:"4️⃣ 配置启动器",
step4Text:"确认服务器设置为 ddon.org 并使用正确端口。",

step5Title:"5️⃣ 注册账号",
step5Text:"在启动器内注册账号并设置密码。",

step6Title:"6️⃣ 启动游戏与翻译",
step6Text:"点击 Login 开始游戏，或点击翻译图标安装英文补丁。",

step7Title:"7️⃣ 开始游戏",
step7Text:"完成教程任务以解锁功能，并跟随红色主线标记。"
},


downloadLinks:{
    full:"https://onedrive.live.com/?cid=d03bbc39b7e96cf2&id=D03BBC39B7E96CF2%21s41ce4966967e409aa3c76c91656cd3fd&resid=D03BBC39B7E96CF2%21s41ce4966967e409aa3c76c91656cd3fd&e=MOHgnr&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3UvYy9kMDNiYmMzOWI3ZTk2Y2YyL0VXWkp6a0YtbHBwQW84ZHNrV1ZzMF8wQnV3Yi02cDhJZUdFejduLW5zeWFxa1E%5FZT1NT0hnbnI&v=validatepermission",
    multi:"https://drive.google.com/drive/folders/1FOAOGG14IKbK1i0jZGEm94ewBagWx6qw?usp=drive_link",
},

jobs:{
"Fighter":"战士",
"Seeker":"探索者",
"Hunter":"猎人",
"Priest":"祭司",
"Shield Sage":"盾贤者",
"Sorcerer":"术士",
"Warrior":"狂战士",
"Element Archer":"元素弓手",
"Alchemist":"炼金术士",
"Spirit Lancer":"灵枪手",
"High Scepter":"高阶权杖"
}
},

/* =========================================================
   🇵🇹 PORTUGUESE
========================================================= */

pt:{
home:"Início",
news:"Notícias",
status:"Status do Servidor",
leaderboard:"Classificação",
download:"Download",

title:"Dragon's Dogma Online",
subtitle:"Maior Servidor • Hardcore",

newsTitle:"Últimas Notícias",
news1Title:"Abertura do Servidor",
news1Text:"DDON está online!",
news2Title:"Modo Hardcore",
news2Text:"Modo Hardcore disponível!",

serverStatusTitle:"Status do Servidor",
statusLabel:"Status",
playersLabel:"Jogadores",
online:"Online",
offline:"Offline",
totalPlayers:"Total de Jogadores Online",

leaderboardTitle:"Classificação",
normalTab:"Normal",
hcTab:"Hardcore",
searchPlaceholder:"Pesquisar jogador...",
level:"Nível",
classes:"Classes",
hcSince:"Hardcore Desde",
hcStatus:"Status",
alive:"Vivo",
dead:"Morto",
noPlayersFound:"Nenhum jogador encontrado",
howToPlay:"Como Jogar",
wiki:"Wiki",

resetPasswordTitle:"Redefinir Senha",
resetPasswordBtn:"Redefinir Senha",
forgotPassword:"Esqueceu a senha?",
sendResetLink:"Enviar Link de Redefinição",
RESET_EMAIL_SENT_IF_EXISTS:"Se o email existir, um link de redefinição foi enviado.",

emailSettings:"Configurações de Email",
enterEmail:"Digite seu endereço de email",
saveEmail:"Salvar Email",
noEmailSet:"Nenhum email definido.",
emailNotVerified:"O email {email} não está verificado.",
emailVerified:"O email {email} está verificado.",
EMAIL_VERIFICATION_SENT:"Email de verificação enviado.",
SET_EMAIL_FAILED:"Falha ao definir o email.",
INVALID_EMAIL:"Endereço de email inválido.",
EMAIL_VERIFIED_SUCCESS:"Email verificado com sucesso!",

LEADERBOARD_FAILED:"Falha ao carregar a classificação.",
CHANNEL_STATUS_FAILED:"Falha ao carregar o status do canal.",
email:"Email",

LOGIN_SUCCESS:"Login bem-sucedido.",
LOGIN_FAILED:"Falha no login.",
LOGIN_SERVER_UNAVAILABLE:"Servidor de login indisponível.",

MISSING_FIELDS:"Campos obrigatórios ausentes.",
INVALID_USERNAME:"Nome de usuário inválido.",
USER_NOT_FOUND:"Usuário não encontrado.",
WRONG_PASSWORD:"Senha incorreta.",

REGISTER_FAILED:"Falha no registro.",
REGISTER_SUCCESS:"Conta criada com sucesso. Agora você pode entrar.",

PASSWORD_CHANGED_SUCCESS:"Senha alterada com sucesso.",
PASSWORD_TOO_SHORT:"A senha deve ter pelo menos 6 caracteres.",
PASSWORDS_DONT_MATCH:"As senhas não coincidem.",

INVALID_TOKEN:"Token inválido ou expirado.",
NO_TOKEN:"Token de autenticação não fornecido.",
SUCCESS_PASSWORD_RESET:"Senha atualizada com sucesso.",

LOGOUT_SUCCESS:"Logout realizado com sucesso.",
NOT_LOGGED_IN:"Você não está logado.",

UNKNOWN_ERROR:"Erro desconhecido.",
DATABASE_ERROR:"Erro no banco de dados.",
STATUS_FAILED:"Falha ao obter status do servidor.",
CONNECTION_ERROR:"Erro de conexão.",

register:"Registrar",
enterCredentials:"Digite usuário e senha.",

accountPanelTitle:"Painel da Conta",
dashboardTitle:"Painel",
charactersTitle:"Personagens",

login:"Entrar",
logout:"Sair",
changePassword:"Alterar Senha",
save:"Salvar",
cancel:"Cancelar",

username:"Usuário",
password:"Senha",
currentPassword:"Senha Atual",
newPassword:"Nova Senha",
confirmPassword:"Confirmar Senha",

loginServerUnavailable:"Servidor de login indisponível.",
connectionError:"Erro de conexão.",
loginFailed:"Falha no login.",

charactersLoadError:"Não foi possível carregar personagens.",
noCharacters:"Nenhum personagem encontrado.",
characterApiError:"Erro na API de personagens.",

passwordsDontMatch:"As senhas não coincidem.",
unknownError:"Erro desconhecido.",

dungeon1:"Grande Templo Shadolean",
dungeon2:"Antiga Estrada Subterrânea de Hadin",
dungeon3:"Túmulo Mysree",
dungeon4:"O Túnel Além da Ponte",
dungeon5:"Erte Deenan",

hcFullDescription:
"Experimente a maior atualização da história do DDON — o novo modo Hardcore! Exclusivo deste servidor! Viva uma aventura emocionante e não morra — pois uma morte significa morte permanente!",

bossRushDescription:
"As Dungeons Boss Rush são Dungeons de Endgame acessíveis apenas pelo canal Boss Rush. Atualmente disponíveis: Grande Templo Shadolean, Antiga Estrada Subterrânea de Hadin, Túmulo Mysree (antigo Monte de Sepultamento Ancestral), O Túnel Além da Ponte e o mais novo dungeon Erte Deenan. Enfrente um desafio intenso e extremo de endgame!",

customFeatures:"Funcionalidades Personalizadas",
customTitle:"Recursos Exclusivos do Servidor",
customSubtitle:"Disponível apenas no DDON Revival",

hcTitle:"Modo Hardcore",
hcText:"Hardcore é o novo modo de jogo personalizado. Viva uma aventura emocionante com apenas uma vida — morreu, acabou!",

customContentTitle:"Conteúdo Personalizado",
customContentText:"Missões e recompensas exclusivas.",
eventsTitle:"Eventos Especiais",
eventsText:"Eventos sazonais exclusivos do servidor.",

cf_block1:"Funcionalidades Personalizadas",
cf_1:"Cursos disponíveis!",
cf_2:"Curso de Armazenamento permanentemente ativo (armazenamento expandido + acesso remoto)",
cf_3:"Recarga gratuita das Green Revive Gems (sem limite diário)",
cf_4:"Todas as Caixas de Armazenamento visíveis na Sala de Craft",
cf_5:"Grupo com 8 jogadores usando /invite",

cf_block2:"Conteúdo Personalizado",
cf_6:"Bonus Dungeons agora são Dungeons de Endgame",
cf_7:"Tickets de Bonus Dungeon obtidos via PP Shop",
cf_8:"Bonus Dungeons atuais: R, XP",

cf_block3:"Sistemas de Qualidade de Vida",
cf_9:"Limite de PP aumentado de 2.000 para 2.000.000",
cf_10:"Expiração do Bazaar aumentada de 3 para 30 dias",
cf_11:"Produção máxima de consumíveis aumentada para 100",
cf_12:"Reciclagem máxima aumentada para 50",
cf_13:"Golden Dragon Mark aumentado para 200",
cf_14:"Silver Dragon Mark aumentado para 500",
cf_15:"Pawns agora ganham EXP e JP de missões",

cf_block4:"Canais Personalizados",
cf_16:"Canal Collab com EXMs exclusivos",
cf_17:"Canal de Inimigos com spawns antigos + novos",
cf_18:"Canal Boss Rush com recompensas exclusivas",

cf_block5:"EXMs de Colaboração",
cf_19:"Colaboração Ghosts & Goblins",
cf_20:"Colaboração Attack on Titan",
cf_21:"Colaboração Monster Hunter",
cf_22:"Colaboração Street Fighter",
cf_23:"Colaboração Pijama",


howto:{
step1Title:"1️⃣ Download",
step1Text:"Primeiro baixe o jogo principal (~36GB).",
fullClient:"Cliente Completo",
multiClient:"Versão Multipart",
quotaInfo:"Se aparecer erro de limite no Google Drive, crie um atalho e baixe a pasta.",

step2Title:"2️⃣ Extração",
step2Text:"Use WinRAR ou 7Zip. O extrator padrão do Windows não funciona.",
unzipWarning:"OneDrive não funciona como local de instalação.",

step3Title:"3️⃣ Iniciando Launcher",
step3Text:"Execute ddo_launcher.exe como Administrador.",

step4Title:"4️⃣ Configuração",
step4Text:"Verifique se o servidor está configurado para ddon.org.",

step5Title:"5️⃣ Registro",
step5Text:"Crie uma conta dentro do launcher.",

step6Title:"6️⃣ Iniciar Jogo",
step6Text:"Faça login e inicie o jogo ou instale o patch de tradução.",

step7Title:"7️⃣ Começando",
step7Text:"Complete o tutorial para desbloquear recursos."
},

downloadLinks:{
    full:"https://onedrive.live.com/?cid=d03bbc39b7e96cf2&id=D03BBC39B7E96CF2%21s41ce4966967e409aa3c76c91656cd3fd&resid=D03BBC39B7E96CF2%21s41ce4966967e409aa3c76c91656cd3fd&e=MOHgnr&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3UvYy9kMDNiYmMzOWI3ZTk2Y2YyL0VXWkp6a0YtbHBwQW84ZHNrV1ZzMF8wQnV3Yi02cDhJZUdFejduLW5zeWFxa1E%5FZT1NT0hnbnI&v=validatepermission",
    multi:"https://drive.google.com/drive/folders/1FOAOGG14IKbK1i0jZGEm94ewBagWx6qw?usp=drive_link",
},

jobs:{
"Fighter":"Guerreiro",
"Seeker":"Explorador",
"Hunter":"Caçador",
"Priest":"Sacerdote",
"Shield Sage":"Sábio Escudo",
"Sorcerer":"Feiticeiro",
"Warrior":"Berserker",
"Element Archer":"Arqueiro Elemental",
"Alchemist":"Alquimista",
"Spirit Lancer":"Lanceiro Espiritual",
"High Scepter":"Alto Cetro"
}
},

/* =========================================================
   🇪🇸 SPANISH
========================================================= */

es:{
home:"Inicio",
news:"Noticias",
status:"Estado del Servidor",
leaderboard:"Clasificación",
download:"Descargar",

title:"Dragon's Dogma Online",
subtitle:"Servidor Más Grande • Hardcore",

newsTitle:"Últimas Noticias",
news1Title:"Apertura del Servidor",
news1Text:"¡DDON ya está en línea!",
news2Title:"Modo Hardcore",
news2Text:"Modo Hardcore disponible.",

serverStatusTitle:"Estado del Servidor",
statusLabel:"Estado",
playersLabel:"Jugadores",
online:"En línea",
offline:"Fuera de línea",
totalPlayers:"Total de Jugadores en Línea",

leaderboardTitle:"Clasificación",
normalTab:"Normal",
hcTab:"Hardcore",
searchPlaceholder:"Buscar jugador...",
level:"Nivel",
classes:"Clases",
hcSince:"Hardcore Desde",
hcStatus:"Estado",
alive:"Vivo",
dead:"Muerto",
noPlayersFound:"No se encontraron jugadores",
howToPlay:"Cómo Jugar",
wiki:"Wiki",

resetPasswordTitle:"Restablecer Contraseña",
resetPasswordBtn:"Restablecer Contraseña",
forgotPassword:"¿Olvidaste tu contraseña?",
sendResetLink:"Enviar Enlace de Restablecimiento",
RESET_EMAIL_SENT_IF_EXISTS:"Si el correo existe, se ha enviado un enlace de restablecimiento.",

emailSettings:"Configuración de Correo",
enterEmail:"Introduce tu dirección de correo",
saveEmail:"Guardar Correo",
noEmailSet:"No hay correo configurado.",
emailNotVerified:"El correo {email} no está verificado.",
emailVerified:"El correo {email} está verificado.",
EMAIL_VERIFICATION_SENT:"Correo de verificación enviado.",
SET_EMAIL_FAILED:"Error al establecer el correo.",
INVALID_EMAIL:"Dirección de correo inválida.",
EMAIL_VERIFIED_SUCCESS:"¡Correo verificado correctamente!",

LEADERBOARD_FAILED:"Error al cargar la clasificación.",
CHANNEL_STATUS_FAILED:"Error al cargar el estado del canal.",
email:"Correo",

LOGIN_SUCCESS:"Inicio de sesión exitoso.",
LOGIN_FAILED:"Error al iniciar sesión.",
LOGIN_SERVER_UNAVAILABLE:"Servidor de login no disponible.",

MISSING_FIELDS:"Faltan campos obligatorios.",
INVALID_USERNAME:"Nombre de usuario inválido.",
USER_NOT_FOUND:"Usuario no encontrado.",
WRONG_PASSWORD:"Contraseña incorrecta.",

REGISTER_FAILED:"Error en el registro.",
REGISTER_SUCCESS:"Cuenta creada con éxito. Ahora puedes iniciar sesión.",

PASSWORD_CHANGED_SUCCESS:"Contraseña cambiada con éxito.",
PASSWORD_TOO_SHORT:"La contraseña debe tener al menos 6 caracteres.",
PASSWORDS_DONT_MATCH:"Las contraseñas no coinciden.",

INVALID_TOKEN:"Token inválido o expirado.",
NO_TOKEN:"No se proporcionó token de autenticación.",
SUCCESS_PASSWORD_RESET:"Contraseña actualizada correctamente.",

LOGOUT_SUCCESS:"Sesión cerrada correctamente.",
NOT_LOGGED_IN:"No has iniciado sesión.",

UNKNOWN_ERROR:"Error desconocido.",
DATABASE_ERROR:"Error de base de datos.",
STATUS_FAILED:"No se pudo obtener el estado del servidor.",
CONNECTION_ERROR:"Error de conexión.",

register:"Registrarse",
enterCredentials:"Ingrese usuario y contraseña.",

accountPanelTitle:"Panel de Cuenta",
dashboardTitle:"Panel",
charactersTitle:"Personajes",

login:"Iniciar Sesión",
logout:"Cerrar Sesión",
changePassword:"Cambiar Contraseña",
save:"Guardar",
cancel:"Cancelar",

username:"Usuario",
password:"Contraseña",
currentPassword:"Contraseña Actual",
newPassword:"Nueva Contraseña",
confirmPassword:"Confirmar Contraseña",

loginServerUnavailable:"Servidor de login no disponible.",
connectionError:"Error de conexión.",
loginFailed:"Error al iniciar sesión.",

charactersLoadError:"No se pudieron cargar los personajes.",
noCharacters:"No se encontraron personajes.",
characterApiError:"Error en la API de personajes.",

passwordsDontMatch:"Las contraseñas no coinciden.",
unknownError:"Error desconocido.",

dungeon1:"Gran Templo Shadolean",
dungeon2:"Antiguo Camino Subterráneo de Hadin",
dungeon3:"Túmulo Mysree",
dungeon4:"El Túnel al Otro Lado del Puente",
dungeon5:"Erte Deenan",


hcFullDescription:
"Vive la mayor actualización en la historia de DDON — el nuevo modo Hardcore. ¡Exclusivo aquí! Disfruta una aventura emocionante y no mueras — porque una sola muerte significa muerte permanente.",

bossRushDescription:
"Las mazmorras Boss Rush son mazmorras de Endgame accesibles únicamente a través del canal Boss Rush. Actualmente disponibles: Gran Templo Shadolean, Antiguo Camino Subterráneo de Hadin, Túmulo Mysree (antiguo Montículo de Entierro Ancestral), El Túnel al Otro Lado del Puente y el nuevo dungeon Erte Deenan. ¡Enfrenta una experiencia de endgame intensa y desafiante!",

customFeatures:"Funciones Personalizadas",
customTitle:"Funciones Exclusivas del Servidor",
customSubtitle:"Disponibles solo en DDON Revival",

hcTitle:"Modo Hardcore",
hcText:"Hardcore es el nuevo modo de juego personalizado. Vive una aventura emocionante con una sola vida — si mueres, se acabó.",

customContentTitle:"Contenido Personalizado",
customContentText:"Misiones y recompensas únicas.",
eventsTitle:"Eventos Especiales",
eventsText:"Eventos exclusivos del servidor.",

cf_block1:"Funciones Personalizadas",
cf_1:"¡Cursos disponibles!",
cf_2:"Curso de Almacenamiento activo permanentemente",
cf_3:"Recarga gratuita de Green Revive Gems",
cf_4:"Todas las cajas visibles en la Sala de Craft",
cf_5:"Grupo de 8 jugadores con /invite",

cf_block2:"Contenido Personalizado",
cf_6:"Bonus Dungeons ahora son Endgame",
cf_7:"Tickets obtenibles en PP Shop",
cf_8:"Bonus actuales: R, XP",

cf_block3:"Mejoras de Calidad de Vida",
cf_9:"Límite de PP aumentado a 2.000.000",
cf_10:"Duración del Bazaar aumentada a 30 días",
cf_11:"Producción máxima aumentada a 100",
cf_12:"Reciclaje máximo aumentado a 50",
cf_13:"Golden Dragon Mark aumentado a 200",
cf_14:"Silver Dragon Mark aumentado a 500",
cf_15:"Los Pawns ahora ganan EXP y JP",

cf_block4:"Canales Personalizados",
cf_16:"Canal Collab exclusivo",
cf_17:"Canal de enemigos antiguos + nuevos",
cf_18:"Canal Boss Rush con recompensas",

cf_block5:"EXMs de Colaboración",
cf_19:"Ghosts & Goblins",
cf_20:"Attack on Titan",
cf_21:"Monster Hunter",
cf_22:"Street Fighter",
cf_23:"Pijama",


howto:{
step1Title:"1️⃣ Descarga",
step1Text:"Descarga el cliente principal (~36GB).",
fullClient:"Cliente Completo",
multiClient:"Versión Multipart",
quotaInfo:"Si aparece error de cuota, crea un acceso directo y descarga la carpeta.",

step2Title:"2️⃣ Descomprimir",
step2Text:"Usa WinRAR o 7Zip.",
unzipWarning:"OneDrive no funciona como ubicación de instalación.",

step3Title:"3️⃣ Lanzador",
step3Text:"Ejecuta ddo_launcher.exe como administrador.",

step4Title:"4️⃣ Configuración",
step4Text:"Asegúrate que el servidor sea ddon.org.",

step5Title:"5️⃣ Registro",
step5Text:"Registra una cuenta en el launcher.",

step6Title:"6️⃣ Iniciar Juego",
step6Text:"Inicia sesión o instala el parche de traducción.",

step7Title:"7️⃣ Comenzar",
step7Text:"Completa el tutorial inicial."
},

downloadLinks:{
    full:"https://onedrive.live.com/?cid=d03bbc39b7e96cf2&id=D03BBC39B7E96CF2%21s41ce4966967e409aa3c76c91656cd3fd&resid=D03BBC39B7E96CF2%21s41ce4966967e409aa3c76c91656cd3fd&e=MOHgnr&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3UvYy9kMDNiYmMzOWI3ZTk2Y2YyL0VXWkp6a0YtbHBwQW84ZHNrV1ZzMF8wQnV3Yi02cDhJZUdFejduLW5zeWFxa1E%5FZT1NT0hnbnI&v=validatepermission",
    multi:"https://drive.google.com/drive/folders/1FOAOGG14IKbK1i0jZGEm94ewBagWx6qw?usp=drive_link",
},

jobs:{
"Fighter":"Guerrero",
"Seeker":"Explorador",
"Hunter":"Cazador",
"Priest":"Sacerdote",
"Shield Sage":"Sabio del Escudo",
"Sorcerer":"Hechicero",
"Warrior":"Berserker",
"Element Archer":"Arquero Elemental",
"Alchemist":"Alquimista",
"Spirit Lancer":"Lancero Espiritual",
"High Scepter":"Gran Cetro"
}
},

/* =========================================================
   🇷🇺 RUSSIAN
========================================================= */

ru:{
home:"Главная",
news:"Новости",
status:"Статус Сервера",
leaderboard:"Таблица лидеров",
download:"Скачать",

title:"Dragon's Dogma Online",
subtitle:"Крупнейший сервер • Hardcore",

newsTitle:"Последние новости",
news1Title:"Открытие сервера",
news1Text:"DDON теперь доступен!",
news2Title:"Hardcore режим",
news2Text:"Hardcore режим доступен.",

serverStatusTitle:"Статус Сервера",
statusLabel:"Статус",
playersLabel:"Игроки",
online:"Онлайн",
offline:"Оффлайн",
totalPlayers:"Всего игроков онлайн",

leaderboardTitle:"Таблица лидеров",
normalTab:"Обычный",
hcTab:"Хардкор",
searchPlaceholder:"Поиск игрока...",
level:"Уровень",
classes:"Классы",
hcSince:"Хардкор с",
hcStatus:"Статус",
alive:"Жив",
dead:"Мёртв",
noPlayersFound:"Игроки не найдены",
howToPlay:"Как Играть",
wiki:"Вики",

resetPasswordTitle:"Сброс пароля",
resetPasswordBtn:"Сбросить пароль",
forgotPassword:"Забыли пароль?",
sendResetLink:"Отправить ссылку для сброса",
RESET_EMAIL_SENT_IF_EXISTS:"Если почта существует, ссылка для сброса отправлена.",

emailSettings:"Настройки почты",
enterEmail:"Введите адрес электронной почты",
saveEmail:"Сохранить почту",
noEmailSet:"Электронная почта не указана.",
emailNotVerified:"Почта {email} не подтверждена.",
emailVerified:"Почта {email} подтверждена.",
EMAIL_VERIFICATION_SENT:"Письмо с подтверждением отправлено.",
SET_EMAIL_FAILED:"Не удалось установить почту.",
INVALID_EMAIL:"Неверный адрес электронной почты.",
EMAIL_VERIFIED_SUCCESS:"Почта успешно подтверждена!",

LEADERBOARD_FAILED:"Не удалось загрузить таблицу лидеров.",
CHANNEL_STATUS_FAILED:"Не удалось загрузить статус канала.",
email:"Почта",

LOGIN_SUCCESS:"Вход выполнен успешно.",
LOGIN_FAILED:"Ошибка входа.",
LOGIN_SERVER_UNAVAILABLE:"Сервер входа недоступен.",

MISSING_FIELDS:"Отсутствуют обязательные поля.",
INVALID_USERNAME:"Неверное имя пользователя.",
USER_NOT_FOUND:"Пользователь не найден.",
WRONG_PASSWORD:"Неверный пароль.",

REGISTER_FAILED:"Ошибка регистрации.",
REGISTER_SUCCESS:"Аккаунт создан успешно. Теперь вы можете войти.",

PASSWORD_CHANGED_SUCCESS:"Пароль успешно изменён.",
PASSWORD_TOO_SHORT:"Пароль должен содержать минимум 6 символов.",
PASSWORDS_DONT_MATCH:"Пароли не совпадают.",

INVALID_TOKEN:"Недействительный или истёкший токен.",
NO_TOKEN:"Токен аутентификации не предоставлен.",
SUCCESS_PASSWORD_RESET:"Пароль успешно обновлён.",

LOGOUT_SUCCESS:"Вы успешно вышли из системы.",
NOT_LOGGED_IN:"Вы не вошли в систему.",

UNKNOWN_ERROR:"Неизвестная ошибка.",
DATABASE_ERROR:"Ошибка базы данных.",
STATUS_FAILED:"Не удалось получить статус сервера.",
CONNECTION_ERROR:"Ошибка соединения.",

register:"Регистрация",
enterCredentials:"Введите имя пользователя и пароль.",

accountPanelTitle:"Панель Аккаунта",
dashboardTitle:"Панель",
charactersTitle:"Персонажи",

login:"Войти",
logout:"Выйти",
changePassword:"Сменить пароль",
save:"Сохранить",
cancel:"Отмена",

username:"Имя пользователя",
password:"Пароль",
currentPassword:"Текущий пароль",
newPassword:"Новый пароль",
confirmPassword:"Подтвердить пароль",

loginServerUnavailable:"Сервер входа недоступен.",
connectionError:"Ошибка соединения.",
loginFailed:"Ошибка входа.",

charactersLoadError:"Не удалось загрузить персонажей.",
noCharacters:"Персонажи не найдены.",
characterApiError:"Ошибка API персонажей.",

passwordsDontMatch:"Пароли не совпадают.",
unknownError:"Неизвестная ошибка.",

dungeon1:"Великий Храм Шадолеан",
dungeon2:"Старая Подземная Дорога Хадина",
dungeon3:"Курган Мисри",
dungeon4:"Тоннель за Мостом",
dungeon5:"Эрте Динан",


hcFullDescription:
"Испытайте крупнейшее обновление в истории DDON — новый режим Hardcore! Эксклюзивно только здесь! Одно приключение — одна жизнь. Одна смерть означает окончательную смерть персонажа!",

bossRushDescription:
"Подземелья Boss Rush — это эндгейм-контент, доступный только через канал Boss Rush. В настоящее время доступны: Великий Храм Шадолеан, Старая Подземная Дорога Хадина, Курган Мисри (бывший Древний Погребальный Холм), Тоннель за Мостом и новейшее подземелье Эрте Динан. Испытайте напряжённое и по-настоящему сложное эндгейм-приключение!",

customFeatures:"Пользовательские функции",
customTitle:"Эксклюзивные функции сервера",
customSubtitle:"Доступно только на DDON Revival",

hcTitle:"Hardcore режим",
hcText:"Hardcore — это новый пользовательский игровой режим. Захватывающее приключение с одной жизнью — смерть означает конец.",

customContentTitle:"Пользовательский контент",
customContentText:"Уникальные задания и награды.",
eventsTitle:"Специальные события",
eventsText:"Эксклюзивные серверные события.",

cf_block1:"Пользовательские функции",
cf_1:"Доступны курсы!",
cf_2:"Курс хранилища активен постоянно",
cf_3:"Бесплатное пополнение Green Revive Gems",
cf_4:"Все ящики видны в комнате крафта",
cf_5:"Пати до 8 игроков через /invite",

cf_block2:"Пользовательский контент",
cf_6:"Bonus Dungeons теперь эндгейм",
cf_7:"Билеты через PP Shop",
cf_8:"Текущие бонусы: R, XP",

cf_block3:"Системы качества жизни",
cf_9:"Лимит PP увеличен до 2.000.000",
cf_10:"Базар увеличен до 30 дней",
cf_11:"Производство увеличено до 100",
cf_12:"Переработка увеличена до 50",
cf_13:"Golden Dragon Mark до 200",
cf_14:"Silver Dragon Mark до 500",
cf_15:"Пешки получают EXP и JP",

cf_block4:"Пользовательские каналы",
cf_16:"Collab канал с EXM",
cf_17:"Канал старых + новых врагов",
cf_18:"Boss Rush канал",

cf_block5:"Коллаборации EXM",
cf_19:"Ghosts & Goblins",
cf_20:"Attack on Titan",
cf_21:"Monster Hunter",
cf_22:"Street Fighter",
cf_23:"Pijama",


howto:{
step1Title:"1️⃣ Загрузка",
step1Text:"Скачайте основной клиент (~36GB).",
fullClient:"Полный клиент",
multiClient:"Многотомная версия",
quotaInfo:"Если превышен лимит Google Drive, скачайте папку через ярлык.",

step2Title:"2️⃣ Распаковка",
step2Text:"Используйте WinRAR или 7Zip.",
unzipWarning:"OneDrive не подходит для установки.",

step3Title:"3️⃣ Запуск лаунчера",
step3Text:"Запустите ddo_launcher.exe от имени администратора.",

step4Title:"4️⃣ Настройки",
step4Text:"Проверьте, что сервер ddon.org.",

step5Title:"5️⃣ Регистрация",
step5Text:"Создайте аккаунт в лаунчере.",

step6Title:"6️⃣ Запуск игры",
step6Text:"Войдите или установите перевод.",

step7Title:"7️⃣ Начало игры",
step7Text:"Пройдите обучающие задания."
},

downloadLinks:{
    full:"https://onedrive.live.com/?cid=d03bbc39b7e96cf2&id=D03BBC39B7E96CF2%21s41ce4966967e409aa3c76c91656cd3fd&resid=D03BBC39B7E96CF2%21s41ce4966967e409aa3c76c91656cd3fd&e=MOHgnr&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3UvYy9kMDNiYmMzOWI3ZTk2Y2YyL0VXWkp6a0YtbHBwQW84ZHNrV1ZzMF8wQnV3Yi02cDhJZUdFejduLW5zeWFxa1E%5FZT1NT0hnbnI&v=validatepermission",
    multi:"https://drive.google.com/drive/folders/1FOAOGG14IKbK1i0jZGEm94ewBagWx6qw?usp=drive_link",
},

jobs:{
"Fighter":"Воин",
"Seeker":"Искатель",
"Hunter":"Охотник",
"Priest":"Жрец",
"Shield Sage":"Мудрец Щита",
"Sorcerer":"Чародей",
"Warrior":"Берсерк",
"Element Archer":"Элементальный Лучник",
"Alchemist":"Алхимик",
"Spirit Lancer":"Копейщик Духа",
"High Scepter":"Высший Скипетр"
}
},

/* =========================================================
   🇹🇷 TURKISH
========================================================= */

tr:{
home:"Ana Sayfa",
news:"Haberler",
status:"Sunucu Durumu",
leaderboard:"Lider Tablosu",
download:"İndir",

title:"Dragon's Dogma Online",
subtitle:"En Büyük Sunucu • Hardcore",

newsTitle:"Son Haberler",
news1Title:"Sunucu Açılışı",
news1Text:"DDON yayında!",
news2Title:"Hardcore Modu",
news2Text:"Hardcore modu aktif.",

serverStatusTitle:"Sunucu Durumu",
statusLabel:"Durum",
playersLabel:"Oyuncular",
online:"Çevrimiçi",
offline:"Çevrimdışı",
totalPlayers:"Toplam Oyuncu",

leaderboardTitle:"Lider Tablosu",
normalTab:"Normal",
hcTab:"Hardcore",
searchPlaceholder:"Oyuncu ara...",
level:"Seviye",
classes:"Sınıflar",
hcSince:"Hardcore Başlangıç",
hcStatus:"Durum",
alive:"Hayatta",
dead:"Ölü",
noPlayersFound:"Oyuncu bulunamadı",
howToPlay:"Nasıl Oynanır",
wiki:"Wiki",

resetPasswordTitle:"Şifre Sıfırlama",
resetPasswordBtn:"Şifreyi Sıfırla",
forgotPassword:"Şifrenizi mi unuttunuz?",
sendResetLink:"Sıfırlama Bağlantısı Gönder",
RESET_EMAIL_SENT_IF_EXISTS:"Eğer e-posta mevcutsa, sıfırlama bağlantısı gönderildi.",

emailSettings:"E-posta Ayarları",
enterEmail:"E-posta adresinizi girin",
saveEmail:"E-postayı Kaydet",
noEmailSet:"E-posta ayarlanmadı.",
emailNotVerified:"{email} e-postası doğrulanmadı.",
emailVerified:"{email} e-postası doğrulandı.",
EMAIL_VERIFICATION_SENT:"Doğrulama e-postası gönderildi.",
SET_EMAIL_FAILED:"E-posta ayarlanamadı.",
INVALID_EMAIL:"Geçersiz e-posta adresi.",
EMAIL_VERIFIED_SUCCESS:"E-posta başarıyla doğrulandı!",

LEADERBOARD_FAILED:"Lider tablosu yüklenemedi.",
CHANNEL_STATUS_FAILED:"Kanal durumu yüklenemedi.",
email:"E-posta",

LOGIN_SUCCESS:"Giriş başarılı.",
LOGIN_FAILED:"Giriş başarısız.",
LOGIN_SERVER_UNAVAILABLE:"Giriş sunucusu kullanılamıyor.",

MISSING_FIELDS:"Zorunlu alanlar eksik.",
INVALID_USERNAME:"Geçersiz kullanıcı adı.",
USER_NOT_FOUND:"Kullanıcı bulunamadı.",
WRONG_PASSWORD:"Yanlış şifre.",

REGISTER_FAILED:"Kayıt başarısız.",
REGISTER_SUCCESS:"Hesap başarıyla oluşturuldu. Şimdi giriş yapabilirsiniz.",

PASSWORD_CHANGED_SUCCESS:"Şifre başarıyla değiştirildi.",
PASSWORD_TOO_SHORT:"Şifre en az 6 karakter olmalıdır.",
PASSWORDS_DONT_MATCH:"Şifreler eşleşmiyor.",

INVALID_TOKEN:"Geçersiz veya süresi dolmuş token.",
NO_TOKEN:"Kimlik doğrulama tokeni sağlanmadı.",
SUCCESS_PASSWORD_RESET:"Şifre başarıyla güncellendi.",

LOGOUT_SUCCESS:"Başarıyla çıkış yapıldı.",
NOT_LOGGED_IN:"Giriş yapmadınız.",

UNKNOWN_ERROR:"Bilinmeyen hata.",
DATABASE_ERROR:"Veritabanı hatası.",
STATUS_FAILED:"Sunucu durumu alınamadı.",
CONNECTION_ERROR:"Bağlantı hatası.",

register:"Kayıt Ol",
enterCredentials:"Kullanıcı adı ve şifre girin.",

dungeon1:"Shadolean Büyük Tapınağı",
dungeon2:"Hadin Yeraltı Eski Yolu",
dungeon3:"Mysree Höyüğü",
dungeon4:"Köprünün Ötesindeki Tünel",
dungeon5:"Erte Deenan",

accountPanelTitle:"Hesap Paneli",
dashboardTitle:"Panel",
charactersTitle:"Karakterler",

login:"Giriş Yap",
logout:"Çıkış Yap",
changePassword:"Şifre Değiştir",
save:"Kaydet",
cancel:"İptal",

username:"Kullanıcı Adı",
password:"Şifre",
currentPassword:"Mevcut Şifre",
newPassword:"Yeni Şifre",
confirmPassword:"Şifreyi Onayla",

loginServerUnavailable:"Giriş sunucusu kullanılamıyor.",
connectionError:"Bağlantı hatası.",
loginFailed:"Giriş başarısız.",

charactersLoadError:"Karakterler yüklenemedi.",
noCharacters:"Karakter bulunamadı.",
characterApiError:"Karakter API hatası.",

passwordsDontMatch:"Şifreler eşleşmiyor.",
unknownError:"Bilinmeyen hata.",

hcFullDescription:
"DDON tarihinin en büyük güncellemesini deneyimle — yeni Hardcore oyun modu! Sadece burada! Heyecan dolu bir maceraya atıl ve ölme — çünkü bir ölüm kalıcı ölümdür!",

bossRushDescription:
"Boss Rush Zindanları, yalnızca Boss Rush Kanalı üzerinden erişilebilen Endgame zindanlarıdır. Mevcut zindanlar: Shadolean Büyük Tapınağı, Hadin Yeraltı Eski Yolu, Mysree Höyüğü (eski Antik Mezar Höyüğü), Köprünün Ötesindeki Tünel ve en yeni zindan Erte Deenan. Yoğun ve zorlu bir endgame deneyimine hazır olun!",

customFeatures:"Özel Özellikler",
customTitle:"Sunucuya Özel Özellikler",
customSubtitle:"Sadece DDON Revival'da mevcut",

hcTitle:"Hardcore Modu",
hcText:"Hardcore yeni özel oyun modudur. Tek canla heyecan dolu bir macera yaşa — ölürsen her şey biter.",

customContentTitle:"Özel İçerik",
customContentText:"Benzersiz görevler ve ödüller.",
eventsTitle:"Özel Etkinlikler",
eventsText:"Sunucuya özel sezonluk etkinlikler.",

cf_block1:"Özel Özellikler",
cf_1:"Kurslar mevcut!",
cf_2:"Depolama Kursu kalıcı aktif",
cf_3:"Green Revive Gems ücretsiz dolum",
cf_4:"Tüm depolar Craft odasında görünür",
cf_5:"/invite ile 8 kişilik parti",

cf_block2:"Özel İçerik",
cf_6:"Bonus Dungeon artık Endgame",
cf_7:"PP Shop üzerinden bilet",
cf_8:"Mevcut: R, XP",

cf_block3:"Yaşam Kalitesi Sistemleri",
cf_9:"PP limiti 2.000.000",
cf_10:"Bazaar süresi 30 gün",
cf_11:"Üretim limiti 100",
cf_12:"Geri dönüşüm 50",
cf_13:"Golden Dragon Mark 200",
cf_14:"Silver Dragon Mark 500",
cf_15:"Pawnlar EXP ve JP kazanır",

cf_block4:"Özel Kanallar",
cf_16:"Collab EXM kanalı",
cf_17:"Eski + yeni spawn kanalı",
cf_18:"Boss Rush kanalı",

cf_block5:"Collab EXM",
cf_19:"Ghosts & Goblins",
cf_20:"Attack on Titan",
cf_21:"Monster Hunter",
cf_22:"Street Fighter",
cf_23:"Pijama",


howto:{
step1Title:"1️⃣ İndirme",
step1Text:"Ana istemciyi (~36GB) indirin.",
fullClient:"Tam İstemci",
multiClient:"Parçalı Sürüm",
quotaInfo:"Google Drive kota hatasında klasör olarak indirin.",

step2Title:"2️⃣ Çıkartma",
step2Text:"WinRAR veya 7Zip kullanın.",
unzipWarning:"OneDrive kurulum için uygun değildir.",

step3Title:"3️⃣ Launcher",
step3Text:"ddo_launcher.exe'yi yönetici olarak çalıştırın.",

step4Title:"4️⃣ Ayarlar",
step4Text:"Sunucunun ddon.org olduğundan emin olun.",

step5Title:"5️⃣ Kayıt",
step5Text:"Launcher üzerinden hesap oluşturun.",

step6Title:"6️⃣ Oyunu Başlat",
step6Text:"Giriş yapın veya çeviri paketini yükleyin.",

step7Title:"7️⃣ Başlangıç",
step7Text:"Eğitim görevlerini tamamlayın."
},

downloadLinks:{
    full:"https://onedrive.live.com/?cid=d03bbc39b7e96cf2&id=D03BBC39B7E96CF2%21s41ce4966967e409aa3c76c91656cd3fd&resid=D03BBC39B7E96CF2%21s41ce4966967e409aa3c76c91656cd3fd&e=MOHgnr&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3UvYy9kMDNiYmMzOWI3ZTk2Y2YyL0VXWkp6a0YtbHBwQW84ZHNrV1ZzMF8wQnV3Yi02cDhJZUdFejduLW5zeWFxa1E%5FZT1NT0hnbnI&v=validatepermission",
    multi:"https://drive.google.com/drive/folders/1FOAOGG14IKbK1i0jZGEm94ewBagWx6qw?usp=drive_link",
},

jobs:{
"Fighter":"Savaşçı",
"Seeker":"Kaşif",
"Hunter":"Avcı",
"Priest":"Rahip",
"Shield Sage":"Kalkan Bilgesi",
"Sorcerer":"Büyücü",
"Warrior":"Berserker",
"Element Archer":"Element Okçusu",
"Alchemist":"Simyacı",
"Spirit Lancer":"Ruh Mızrakçısı",
"High Scepter":"Yüksek Asa"
}
},

/* =========================================================
   🇵🇱 POLISH
========================================================= */

pl:{
home:"Strona Główna",
news:"Aktualności",
status:"Status Serwera",
leaderboard:"Ranking",
download:"Pobierz",

title:"Dragon's Dogma Online",
subtitle:"Największy Serwer • Hardcore",

newsTitle:"Najnowsze Wiadomości",
news1Title:"Otwarcie Serwera",
news1Text:"DDON jest online!",
news2Title:"Tryb Hardcore",
news2Text:"Tryb Hardcore dostępny.",

serverStatusTitle:"Status Serwera",
statusLabel:"Status",
playersLabel:"Gracze",
online:"Online",
offline:"Offline",
totalPlayers:"Łączna liczba graczy",

leaderboardTitle:"Ranking",
normalTab:"Normalny",
hcTab:"Hardcore",
searchPlaceholder:"Szukaj gracza...",
level:"Poziom",
classes:"Klasy",
hcSince:"Hardcore od",
hcStatus:"Status",
alive:"Żyje",
dead:"Martwy",
noPlayersFound:"Nie znaleziono graczy",
howToPlay:"Jak Grać",
wiki:"Wiki",

resetPasswordTitle:"Resetowanie Hasła",
resetPasswordBtn:"Resetuj Hasło",
forgotPassword:"Zapomniałeś hasła?",
sendResetLink:"Wyślij Link Resetujący",
RESET_EMAIL_SENT_IF_EXISTS:"Jeśli email istnieje, link resetujący został wysłany.",

emailSettings:"Ustawienia Email",
enterEmail:"Wprowadź adres email",
saveEmail:"Zapisz Email",
noEmailSet:"Brak ustawionego adresu email.",
emailNotVerified:"Email {email} nie został zweryfikowany.",
emailVerified:"Email {email} został zweryfikowany.",
EMAIL_VERIFICATION_SENT:"Email weryfikacyjny wysłany.",
SET_EMAIL_FAILED:"Nie udało się ustawić emaila.",
INVALID_EMAIL:"Nieprawidłowy adres email.",
EMAIL_VERIFIED_SUCCESS:"Email został zweryfikowany!",

LEADERBOARD_FAILED:"Nie udało się załadować rankingu.",
CHANNEL_STATUS_FAILED:"Nie udało się załadować statusu kanału.",
email:"Email",

LOGIN_SUCCESS:"Logowanie zakończone sukcesem.",
LOGIN_FAILED:"Logowanie nie powiodło się.",
LOGIN_SERVER_UNAVAILABLE:"Serwer logowania niedostępny.",

MISSING_FIELDS:"Brak wymaganych pól.",
INVALID_USERNAME:"Nieprawidłowa nazwa użytkownika.",
USER_NOT_FOUND:"Nie znaleziono użytkownika.",
WRONG_PASSWORD:"Nieprawidłowe hasło.",

REGISTER_FAILED:"Rejestracja nie powiodła się.",
REGISTER_SUCCESS:"Konto zostało utworzone. Możesz się teraz zalogować.",

PASSWORD_CHANGED_SUCCESS:"Hasło zostało zmienione.",
PASSWORD_TOO_SHORT:"Hasło musi mieć co najmniej 6 znaków.",
PASSWORDS_DONT_MATCH:"Hasła nie są zgodne.",

INVALID_TOKEN:"Nieprawidłowy lub wygasły token.",
NO_TOKEN:"Nie podano tokenu uwierzytelniającego.",
SUCCESS_PASSWORD_RESET:"Hasło zostało zaktualizowane.",

LOGOUT_SUCCESS:"Wylogowano pomyślnie.",
NOT_LOGGED_IN:"Nie jesteś zalogowany.",

UNKNOWN_ERROR:"Nieznany błąd.",
DATABASE_ERROR:"Błąd bazy danych.",
STATUS_FAILED:"Nie udało się pobrać statusu serwera.",
CONNECTION_ERROR:"Błąd połączenia.",

register:"Zarejestruj się",
enterCredentials:"Wpisz nazwę użytkownika i hasło.",

accountPanelTitle:"Panel Konta",
dashboardTitle:"Panel",
charactersTitle:"Postacie",

login:"Zaloguj się",
logout:"Wyloguj się",
changePassword:"Zmień Hasło",
save:"Zapisz",
cancel:"Anuluj",

username:"Nazwa użytkownika",
password:"Hasło",
currentPassword:"Aktualne hasło",
newPassword:"Nowe hasło",
confirmPassword:"Potwierdź hasło",

loginServerUnavailable:"Serwer logowania niedostępny.",
connectionError:"Błąd połączenia.",
loginFailed:"Logowanie nie powiodło się.",

charactersLoadError:"Nie można załadować postaci.",
noCharacters:"Nie znaleziono postaci.",
characterApiError:"Błąd API postaci.",

passwordsDontMatch:"Hasła nie są zgodne.",
unknownError:"Nieznany błąd.",

dungeon1:"Wielka Świątynia Shadolean",
dungeon2:"Stara Podziemna Droga Hadina",
dungeon3:"Kurhan Mysree",
dungeon4:"Tunel za Mostem",
dungeon5:"Erte Deenan",

hcFullDescription:
"Przeżyj największą aktualizację w historii DDON — nowy tryb Hardcore! Dostępny wyłącznie tutaj! Jedna przygoda, jedno życie — jedna śmierć oznacza koniec postaci!",

bossRushDescription:
"Lochy Boss Rush to zawartość Endgame dostępna wyłącznie przez kanał Boss Rush. Obecnie dostępne lochy: Wielka Świątynia Shadolean, Stara Podziemna Droga Hadina, Kurhan Mysree (dawny Starożytny Kopiec Pogrzebowy), Tunel za Mostem oraz najnowszy loch Erte Deenan. Zmierz się z intensywnym i wymagającym wyzwaniem endgame!",

customFeatures:"Funkcje Niestandardowe",
customTitle:"Ekskluzywne Funkcje Serwera",
customSubtitle:"Dostępne tylko na DDON Revival",

hcTitle:"Tryb Hardcore",
hcText:"Hardcore to nowy niestandardowy tryb gry. Przeżyj ekscytującą przygodę z jednym życiem — śmierć oznacza koniec.",

customContentTitle:"Niestandardowa Zawartość",
customContentText:"Unikalne zadania i nagrody.",
eventsTitle:"Specjalne Wydarzenia",
eventsText:"Sezonowe wydarzenia dostępne tylko na serwerze.",

cf_block1:"Funkcje Niestandardowe",
cf_1:"Dostępne kursy!",
cf_2:"Kurs magazynu aktywny na stałe (rozszerzona przestrzeń + zdalny dostęp)",
cf_3:"Darmowe uzupełnianie Green Revive Gems",
cf_4:"Wszystkie skrzynie widoczne w pokoju craftingu",
cf_5:"Grupa 8 graczy przez /invite",

cf_block2:"Niestandardowa Zawartość",
cf_6:"Bonusowe lochy jako Endgame",
cf_7:"Bilety dostępne w PP Shop",
cf_8:"Aktualne lochy: R, XP",

cf_block3:"Systemy Ułatwień",
cf_9:"Limit PP zwiększony do 2 000 000",
cf_10:"Czas trwania Bazaar wydłużony do 30 dni",
cf_11:"Produkcja zwiększona do 100",
cf_12:"Recykling zwiększony do 50",
cf_13:"Golden Dragon Mark zwiększony do 200",
cf_14:"Silver Dragon Mark zwiększony do 500",
cf_15:"Piony zdobywają EXP i JP",

cf_block4:"Kanały Niestandardowe",
cf_16:"Kanał Collab z ekskluzywnymi EXM",
cf_17:"Kanał starych + nowych przeciwników",
cf_18:"Kanał Boss Rush",

cf_block5:"Wydarzenia Collab EXM",
cf_19:"Ghosts & Goblins",
cf_20:"Attack on Titan",
cf_21:"Monster Hunter",
cf_22:"Street Fighter",
cf_23:"Pijama",


howto:{
step1Title:"1️⃣ Pobieranie",
step1Text:"Pobierz głównego klienta (~36GB).",
fullClient:"Pełny Klient",
multiClient:"Wersja Multipart",
quotaInfo:"Przy błędzie limitu pobierz folder przez skrót.",

step2Title:"2️⃣ Rozpakowanie",
step2Text:"Użyj WinRAR lub 7Zip.",
unzipWarning:"OneDrive nie nadaje się do instalacji.",

step3Title:"3️⃣ Launcher",
step3Text:"Uruchom ddo_launcher.exe jako administrator.",

step4Title:"4️⃣ Konfiguracja",
step4Text:"Sprawdź czy serwer to ddon.org.",

step5Title:"5️⃣ Rejestracja",
step5Text:"Zarejestruj konto w launcherze.",

step6Title:"6️⃣ Start Gry",
step6Text:"Zaloguj się lub zainstaluj tłumaczenie.",

step7Title:"7️⃣ Początek",
step7Text:"Ukończ samouczek."
},

downloadLinks:{
    full:"https://onedrive.live.com/?cid=d03bbc39b7e96cf2&id=D03BBC39B7E96CF2%21s41ce4966967e409aa3c76c91656cd3fd&resid=D03BBC39B7E96CF2%21s41ce4966967e409aa3c76c91656cd3fd&e=MOHgnr&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3UvYy9kMDNiYmMzOWI3ZTk2Y2YyL0VXWkp6a0YtbHBwQW84ZHNrV1ZzMF8wQnV3Yi02cDhJZUdFejduLW5zeWFxa1E%5FZT1NT0hnbnI&v=validatepermission",
    multi:"https://drive.google.com/drive/folders/1FOAOGG14IKbK1i0jZGEm94ewBagWx6qw?usp=drive_link",
},

jobs:{
"Fighter":"Wojownik",
"Seeker":"Poszukiwacz",
"Hunter":"Łowca",
"Priest":"Kapłan",
"Shield Sage":"Mędrzec Tarczy",
"Sorcerer":"Czarodziej",
"Warrior":"Berserker",
"Element Archer":"Łucznik Żywiołów",
"Alchemist":"Alchemik",
"Spirit Lancer":"Włócznik Duchów",
"High Scepter":"Wielkie Berło"
}
},

/* =========================================================
   🇰🇷 KOREAN
========================================================= */

kr:{
home:"홈",
news:"뉴스",
status:"서버 상태",
leaderboard:"리더보드",
download:"다운로드",

title:"드래곤즈 도그마 온라인",
subtitle:"최대 서버 • 하드코어",

newsTitle:"최신 뉴스",
news1Title:"서버 오픈",
news1Text:"DDON 시작!",
news2Title:"하드코어 모드",
news2Text:"하드코어 모드 활성화.",

serverStatusTitle:"서버 상태",
statusLabel:"상태",
playersLabel:"플레이어 수",
online:"온라인",
offline:"오프라인",
totalPlayers:"총 온라인 플레이어",

leaderboardTitle:"리더보드",
normalTab:"일반",
hcTab:"하드코어",
searchPlaceholder:"플레이어 검색...",
level:"레벨",
classes:"직업",
hcSince:"하드코어 시작일",
hcStatus:"상태",
alive:"생존",
dead:"사망",
noPlayersFound:"플레이어를 찾을 수 없습니다",
howToPlay:"플레이 방법",
wiki:"위키",

resetPasswordTitle:"비밀번호 재설정",
resetPasswordBtn:"비밀번호 재설정",
forgotPassword:"비밀번호를 잊으셨나요?",
sendResetLink:"재설정 링크 보내기",
RESET_EMAIL_SENT_IF_EXISTS:"이메일이 존재하면 재설정 링크가 전송되었습니다.",

emailSettings:"이메일 설정",
enterEmail:"이메일 주소를 입력하세요",
saveEmail:"이메일 저장",
noEmailSet:"설정된 이메일이 없습니다.",
emailNotVerified:"이메일 {email} 은(는) 인증되지 않았습니다.",
emailVerified:"이메일 {email} 은(는) 인증되었습니다.",
EMAIL_VERIFICATION_SENT:"인증 이메일이 전송되었습니다.",
SET_EMAIL_FAILED:"이메일 설정 실패.",
INVALID_EMAIL:"잘못된 이메일 주소입니다.",
EMAIL_VERIFIED_SUCCESS:"이메일 인증 완료!",

LEADERBOARD_FAILED:"리더보드 로드 실패.",
CHANNEL_STATUS_FAILED:"채널 상태 로드 실패.",
email:"이메일",

LOGIN_SUCCESS:"로그인 성공.",
LOGIN_FAILED:"로그인 실패.",
LOGIN_SERVER_UNAVAILABLE:"로그인 서버를 사용할 수 없습니다.",

MISSING_FIELDS:"필수 항목이 누락되었습니다.",
INVALID_USERNAME:"유효하지 않은 사용자 이름입니다.",
USER_NOT_FOUND:"사용자를 찾을 수 없습니다.",
WRONG_PASSWORD:"비밀번호가 올바르지 않습니다.",

REGISTER_FAILED:"회원가입 실패.",
REGISTER_SUCCESS:"계정이 생성되었습니다. 이제 로그인하세요.",

PASSWORD_CHANGED_SUCCESS:"비밀번호가 성공적으로 변경되었습니다.",
PASSWORD_TOO_SHORT:"비밀번호는 최소 6자 이상이어야 합니다.",
PASSWORDS_DONT_MATCH:"비밀번호가 일치하지 않습니다.",

INVALID_TOKEN:"유효하지 않거나 만료된 토큰입니다.",
NO_TOKEN:"인증 토큰이 제공되지 않았습니다.",
SUCCESS_PASSWORD_RESET:"비밀번호가 성공적으로 업데이트되었습니다.",

LOGOUT_SUCCESS:"로그아웃되었습니다.",
NOT_LOGGED_IN:"로그인되어 있지 않습니다.",

UNKNOWN_ERROR:"알 수 없는 오류.",
DATABASE_ERROR:"데이터베이스 오류.",
STATUS_FAILED:"서버 상태를 가져오지 못했습니다.",
CONNECTION_ERROR:"연결 오류.",

register:"회원가입",
enterCredentials:"사용자 이름과 비밀번호를 입력하세요.",

dungeon1:"샤돌린 대사원",
dungeon2:"하딘 지하 구도로",
dungeon3:"미스리 고분",
dungeon4:"다리 건너 터널",
dungeon5:"에르테 디난",

accountPanelTitle:"계정 패널",
dashboardTitle:"대시보드",
charactersTitle:"캐릭터",

login:"로그인",
logout:"로그아웃",
changePassword:"비밀번호 변경",
save:"저장",
cancel:"취소",

username:"사용자 이름",
password:"비밀번호",
currentPassword:"현재 비밀번호",
newPassword:"새 비밀번호",
confirmPassword:"비밀번호 확인",

loginServerUnavailable:"로그인 서버를 사용할 수 없습니다.",
connectionError:"연결 오류.",
loginFailed:"로그인 실패.",

charactersLoadError:"캐릭터를 불러올 수 없습니다.",
noCharacters:"캐릭터가 없습니다.",
characterApiError:"캐릭터 API 오류.",

passwordsDontMatch:"비밀번호가 일치하지 않습니다.",
unknownError:"알 수 없는 오류.",

hcFullDescription:
"DDON 역사상 가장 큰 업데이트를 경험하세요 — 새로운 하드코어 모드! 이 서버에서만 가능합니다! 단 하나의 생명으로 모험을 즐기세요 — 한 번의 죽음은 영구적인 죽음을 의미합니다.",

bossRushDescription:
"보스 러시 던전은 보스 러시 채널을 통해서만 입장할 수 있는 엔드게임 던전입니다. 현재 이용 가능한 던전은 샤돌린 대사원, 하딘 지하 구도로, 미스리 고분(구 고대 매장지), 다리 건너 터널, 그리고 최신 던전 에르테 디난입니다. 긴장감 넘치고 도전적인 엔드게임을 경험하세요!",

customFeatures:"커스텀 기능",
customTitle:"서버 전용 기능",
customSubtitle:"DDON Revival에서만 이용 가능",

hcTitle:"하드코어 모드",
hcText:"하드코어는 새로운 커스텀 게임 모드입니다. 단 하나의 생명으로 모험을 즐기세요 — 죽으면 끝입니다.",

customContentTitle:"커스텀 콘텐츠",
customContentText:"독특한 퀘스트와 보상.",
eventsTitle:"특별 이벤트",
eventsText:"서버 전용 시즌 이벤트.",

cf_block1:"커스텀 기능",
cf_1:"코스 사용 가능!",
cf_2:"창고 코스 상시 활성화 (확장 저장 + 원격 접근)",
cf_3:"그린 리바이브 젬 무료 충전",
cf_4:"모든 창고가 제작실에서 표시",
cf_5:"/invite로 8인 파티 가능",

cf_block2:"커스텀 콘텐츠",
cf_6:"보너스 던전이 엔드게임 던전으로 변경",
cf_7:"PP 상점에서 티켓 획득 가능",
cf_8:"현재 던전: R, XP",

cf_block3:"편의성 시스템",
cf_9:"PP 상한 2,000,000",
cf_10:"바자 기간 30일",
cf_11:"제작 상한 100",
cf_12:"재활용 상한 50",
cf_13:"골든 드래곤 마크 200",
cf_14:"실버 드래곤 마크 500",
cf_15:"폰이 퀘스트 EXP와 JP 획득",

cf_block4:"커스텀 채널",
cf_16:"콜라보 EXM 채널",
cf_17:"구형 + 신규 스폰 채널",
cf_18:"보스 러시 채널",

cf_block5:"콜라보 EXM",
cf_19:"Ghosts & Goblins",
cf_20:"Attack on Titan",
cf_21:"Monster Hunter",
cf_22:"Street Fighter",
cf_23:"Pijama",


howto:{
step1Title:"1️⃣ 다운로드",
step1Text:"메인 클라이언트(~36GB)를 다운로드하세요.",
fullClient:"전체 클라이언트",
multiClient:"분할 다운로드",
quotaInfo:"Google Drive 제한 오류 시 폴더로 다운로드하세요.",

step2Title:"2️⃣ 압축 해제",
step2Text:"WinRAR 또는 7Zip 사용.",
unzipWarning:"OneDrive는 설치 위치로 사용할 수 없습니다.",

step3Title:"3️⃣ 런처 실행",
step3Text:"ddo_launcher.exe를 관리자 권한으로 실행하세요.",

step4Title:"4️⃣ 설정",
step4Text:"서버가 ddon.org인지 확인하세요.",

step5Title:"5️⃣ 계정 등록",
step5Text:"런처에서 계정을 생성하세요.",

step6Title:"6️⃣ 게임 시작",
step6Text:"로그인하거나 번역 패치를 설치하세요.",

step7Title:"7️⃣ 시작",
step7Text:"튜토리얼을 완료하세요."
},

downloadLinks:{
    full:"https://onedrive.live.com/?cid=d03bbc39b7e96cf2&id=D03BBC39B7E96CF2%21s41ce4966967e409aa3c76c91656cd3fd&resid=D03BBC39B7E96CF2%21s41ce4966967e409aa3c76c91656cd3fd&e=MOHgnr&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3UvYy9kMDNiYmMzOWI3ZTk2Y2YyL0VXWkp6a0YtbHBwQW84ZHNrV1ZzMF8wQnV3Yi02cDhJZUdFejduLW5zeWFxa1E%5FZT1NT0hnbnI&v=validatepermission",
    multi:"https://drive.google.com/drive/folders/1FOAOGG14IKbK1i0jZGEm94ewBagWx6qw?usp=drive_link",
},

jobs:{
"Fighter":"파이터",
"Seeker":"시커",
"Hunter":"헌터",
"Priest":"프리스트",
"Shield Sage":"실드 세이지",
"Sorcerer":"소서러",
"Warrior":"워리어",
"Element Archer":"엘리먼트 아처",
"Alchemist":"알케미스트",
"Spirit Lancer":"스피릿 랜서",
"High Scepter":"하이 셉터"
}
},

/* =========================================================
   🇮🇹 ITALIAN
========================================================= */

it:{
home:"Home",
news:"Notizie",
status:"Stato Server",
leaderboard:"Classifica",
download:"Scarica",

title:"Dragon's Dogma Online",
subtitle:"Server Più Grande • Hardcore",

newsTitle:"Ultime Notizie",
news1Title:"Apertura Server",
news1Text:"DDON è online!",
news2Title:"Modalità Hardcore",
news2Text:"Modalità Hardcore attiva.",

serverStatusTitle:"Stato Server",
statusLabel:"Stato",
playersLabel:"Giocatori",
online:"Online",
offline:"Offline",
totalPlayers:"Totale Giocatori Online",

leaderboardTitle:"Classifica",
normalTab:"Normale",
hcTab:"Hardcore",
searchPlaceholder:"Cerca giocatore...",
level:"Livello",
classes:"Classi",
hcSince:"Hardcore Dal",
hcStatus:"Stato",
alive:"Vivo",
dead:"Morto",
noPlayersFound:"Nessun giocatore trovato",
howToPlay:"Come Giocare",
wiki:"Wiki",

resetPasswordTitle:"Reimposta Password",
resetPasswordBtn:"Reimposta Password",
forgotPassword:"Password dimenticata?",
sendResetLink:"Invia Link di Reimpostazione",
RESET_EMAIL_SENT_IF_EXISTS:"Se l'email esiste, è stato inviato un link di reimpostazione.",

emailSettings:"Impostazioni Email",
enterEmail:"Inserisci il tuo indirizzo email",
saveEmail:"Salva Email",
noEmailSet:"Nessuna email impostata.",
emailNotVerified:"L'email {email} non è verificata.",
emailVerified:"L'email {email} è verificata.",
EMAIL_VERIFICATION_SENT:"Email di verifica inviata.",
SET_EMAIL_FAILED:"Impossibile impostare l'email.",
INVALID_EMAIL:"Indirizzo email non valido.",
EMAIL_VERIFIED_SUCCESS:"Email verificata con successo!",

LEADERBOARD_FAILED:"Impossibile caricare la classifica.",
CHANNEL_STATUS_FAILED:"Impossibile caricare lo stato del canale.",
email:"Email",

LOGIN_SUCCESS:"Accesso effettuato con successo.",
LOGIN_FAILED:"Accesso fallito.",
LOGIN_SERVER_UNAVAILABLE:"Server di login non disponibile.",

MISSING_FIELDS:"Campi obbligatori mancanti.",
INVALID_USERNAME:"Nome utente non valido.",
USER_NOT_FOUND:"Utente non trovato.",
WRONG_PASSWORD:"Password errata.",

REGISTER_FAILED:"Registrazione fallita.",
REGISTER_SUCCESS:"Account creato con successo. Ora puoi accedere.",

PASSWORD_CHANGED_SUCCESS:"Password modificata con successo.",
PASSWORD_TOO_SHORT:"La password deve contenere almeno 6 caratteri.",
PASSWORDS_DONT_MATCH:"Le password non coincidono.",

INVALID_TOKEN:"Token non valido o scaduto.",
NO_TOKEN:"Token di autenticazione non fornito.",
SUCCESS_PASSWORD_RESET:"Password aggiornata con successo.",

LOGOUT_SUCCESS:"Disconnessione avvenuta con successo.",
NOT_LOGGED_IN:"Non hai effettuato l'accesso.",

UNKNOWN_ERROR:"Errore sconosciuto.",
DATABASE_ERROR:"Errore del database.",
STATUS_FAILED:"Impossibile ottenere lo stato del server.",
CONNECTION_ERROR:"Errore di connessione.",

register:"Registrati",
enterCredentials:"Inserisci nome utente e password.",

accountPanelTitle:"Pannello Account",
dashboardTitle:"Dashboard",
charactersTitle:"Personaggi",

login:"Accedi",
logout:"Esci",
changePassword:"Cambia Password",
save:"Salva",
cancel:"Annulla",

username:"Nome utente",
password:"Password",
currentPassword:"Password attuale",
newPassword:"Nuova password",
confirmPassword:"Conferma password",

loginServerUnavailable:"Server di login non disponibile.",
connectionError:"Errore di connessione.",
loginFailed:"Accesso fallito.",

charactersLoadError:"Impossibile caricare i personaggi.",
noCharacters:"Nessun personaggio trovato.",
characterApiError:"Errore API personaggi.",

passwordsDontMatch:"Le password non coincidono.",
unknownError:"Errore sconosciuto.",

dungeon1:"Grande Tempio Shadolean",
dungeon2:"Antica Strada Sotterranea di Hadin",
dungeon3:"Tumulo di Mysree",
dungeon4:"Il Tunnel Oltre il Ponte",
dungeon5:"Erte Deenan",

hcFullDescription:
"Vivi il più grande aggiornamento nella storia di DDON — la nuova modalità Hardcore! Esclusiva solo qui! Un'avventura intensa con una sola vita — una morte significa fine definitiva.",

bossRushDescription:
"I Boss Rush Dungeon sono contenuti Endgame accessibili esclusivamente tramite il Boss Rush Channel. Attualmente disponibili: Grande Tempio Shadolean, Antica Strada Sotterranea di Hadin, Tumulo di Mysree (ex Antico Tumulo Funerario), Il Tunnel Oltre il Ponte e il nuovo dungeon Erte Deenan. Affronta un'esperienza endgame intensa e impegnativa!",

customFeatures:"Funzionalità Personalizzate",
customTitle:"Funzionalità Esclusive del Server",
customSubtitle:"Disponibili solo su DDON Revival",

hcTitle:"Modalità Hardcore",
hcText:"Hardcore è la nuova modalità di gioco personalizzata. Vivi un'avventura emozionante con una sola vita — se muori, è finita.",

customContentTitle:"Contenuto Personalizzato",
customContentText:"Missioni e ricompense uniche.",
eventsTitle:"Eventi Speciali",
eventsText:"Eventi stagionali esclusivi del server.",

cf_block1:"Funzionalità Personalizzate",
cf_1:"Corsi disponibili!",
cf_2:"Corso Magazzino attivo permanentemente",
cf_3:"Ricarica gratuita Green Revive Gems",
cf_4:"Tutti i depositi visibili nella stanza di crafting",
cf_5:"Party fino a 8 giocatori con /invite",

cf_block2:"Contenuto Personalizzato",
cf_6:"Bonus Dungeon ora Endgame",
cf_7:"Biglietti disponibili nel PP Shop",
cf_8:"Dungeon attuali: R, XP",

cf_block3:"Sistemi Qualità della Vita",
cf_9:"Limite PP aumentato a 2.000.000",
cf_10:"Durata Bazaar aumentata a 30 giorni",
cf_11:"Produzione aumentata a 100",
cf_12:"Riciclo aumentato a 50",
cf_13:"Golden Dragon Mark a 200",
cf_14:"Silver Dragon Mark a 500",
cf_15:"I Pawn ora ottengono EXP e JP",

cf_block4:"Canali Personalizzati",
cf_16:"Canale Collab con EXM esclusivi",
cf_17:"Canale nemici vecchi + nuovi",
cf_18:"Canale Boss Rush",

cf_block5:"Collaborazioni EXM",
cf_19:"Ghosts & Goblins",
cf_20:"Attack on Titan",
cf_21:"Monster Hunter",
cf_22:"Street Fighter",
cf_23:"Pijama",


howto:{
step1Title:"1️⃣ Download",
step1Text:"Scarica il client principale (~36GB).",
fullClient:"Client Completo",
multiClient:"Versione Multipart",
quotaInfo:"Se limite superato, scarica la cartella.",

step2Title:"2️⃣ Estrazione",
step2Text:"Usa WinRAR o 7Zip.",
unzipWarning:"OneDrive non funziona come destinazione.",

step3Title:"3️⃣ Launcher",
step3Text:"Avvia ddo_launcher.exe come amministratore.",

step4Title:"4️⃣ Configurazione",
step4Text:"Controlla che il server sia ddon.org.",

step5Title:"5️⃣ Registrazione",
step5Text:"Registra un account nel launcher.",

step6Title:"6️⃣ Avvio",
step6Text:"Accedi o installa la patch inglese.",

step7Title:"7️⃣ Inizio",
step7Text:"Completa il tutorial."
},

downloadLinks:{
    full:"https://onedrive.live.com/?cid=d03bbc39b7e96cf2&id=D03BBC39B7E96CF2%21s41ce4966967e409aa3c76c91656cd3fd&resid=D03BBC39B7E96CF2%21s41ce4966967e409aa3c76c91656cd3fd&e=MOHgnr&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3UvYy9kMDNiYmMzOWI3ZTk2Y2YyL0VXWkp6a0YtbHBwQW84ZHNrV1ZzMF8wQnV3Yi02cDhJZUdFejduLW5zeWFxa1E%5FZT1NT0hnbnI&v=validatepermission",
    multi:"https://drive.google.com/drive/folders/1FOAOGG14IKbK1i0jZGEm94ewBagWx6qw?usp=drive_link",
},

jobs:{
"Fighter":"Guerriero",
"Seeker":"Esploratore",
"Hunter":"Cacciatore",
"Priest":"Sacerdote",
"Shield Sage":"Saggio dello Scudo",
"Sorcerer":"Stregone",
"Warrior":"Berserker",
"Element Archer":"Arciere Elementale",
"Alchemist":"Alchimista",
"Spirit Lancer":"Lanciere Spirituale",
"High Scepter":"Alto Scettro"
}
},

/* =========================================================
   🇫🇷 FRENCH
========================================================= */

fr:{
home:"Accueil",
news:"Actualités",
status:"Statut du Serveur",
leaderboard:"Classement",
download:"Télécharger",

title:"Dragon's Dogma Online",
subtitle:"Plus Grand Serveur • Hardcore",

newsTitle:"Dernières Actualités",
news1Title:"Ouverture du Serveur",
news1Text:"DDON est en ligne!",
news2Title:"Mode Hardcore",
news2Text:"Mode Hardcore actif.",

serverStatusTitle:"Statut du Serveur",
statusLabel:"Statut",
playersLabel:"Joueurs",
online:"En ligne",
offline:"Hors ligne",
totalPlayers:"Total des Joueurs en Ligne",

leaderboardTitle:"Classement",
normalTab:"Normal",
hcTab:"Hardcore",
searchPlaceholder:"Rechercher joueur...",
level:"Niveau",
classes:"Classes",
hcSince:"Hardcore Depuis",
hcStatus:"Statut",
alive:"Vivant",
dead:"Mort",
noPlayersFound:"Aucun joueur trouvé",
howToPlay:"Comment Jouer",
wiki:"Wiki",

resetPasswordTitle:"Réinitialiser le mot de passe",
resetPasswordBtn:"Réinitialiser le mot de passe",
forgotPassword:"Mot de passe oublié ?",
sendResetLink:"Envoyer le lien de réinitialisation",
RESET_EMAIL_SENT_IF_EXISTS:"Si l'email existe, un lien de réinitialisation a été envoyé.",

emailSettings:"Paramètres Email",
enterEmail:"Entrez votre adresse email",
saveEmail:"Enregistrer l'email",
noEmailSet:"Aucune adresse email définie.",
emailNotVerified:"L'email {email} n'est pas vérifié.",
emailVerified:"L'email {email} est vérifié.",
EMAIL_VERIFICATION_SENT:"Email de vérification envoyé.",
SET_EMAIL_FAILED:"Échec de la définition de l'email.",
INVALID_EMAIL:"Adresse email invalide.",
EMAIL_VERIFIED_SUCCESS:"Email vérifié avec succès !",

LEADERBOARD_FAILED:"Échec du chargement du classement.",
CHANNEL_STATUS_FAILED:"Échec du chargement du statut du canal.",
email:"Email",

LOGIN_SUCCESS:"Connexion réussie.",
LOGIN_FAILED:"Échec de la connexion.",
LOGIN_SERVER_UNAVAILABLE:"Serveur de connexion indisponible.",

MISSING_FIELDS:"Champs obligatoires manquants.",
INVALID_USERNAME:"Nom d'utilisateur invalide.",
USER_NOT_FOUND:"Utilisateur introuvable.",
WRONG_PASSWORD:"Mot de passe incorrect.",

REGISTER_FAILED:"Échec de l'inscription.",
REGISTER_SUCCESS:"Compte créé avec succès. Vous pouvez maintenant vous connecter.",

PASSWORD_CHANGED_SUCCESS:"Mot de passe modifié avec succès.",
PASSWORD_TOO_SHORT:"Le mot de passe doit contenir au moins 6 caractères.",
PASSWORDS_DONT_MATCH:"Les mots de passe ne correspondent pas.",

INVALID_TOKEN:"Jeton invalide ou expiré.",
NO_TOKEN:"Jeton d'authentification non fourni.",
SUCCESS_PASSWORD_RESET:"Mot de passe mis à jour avec succès.",

LOGOUT_SUCCESS:"Déconnexion réussie.",
NOT_LOGGED_IN:"Vous n'êtes pas connecté.",

UNKNOWN_ERROR:"Erreur inconnue.",
DATABASE_ERROR:"Erreur de base de données.",
STATUS_FAILED:"Impossible de récupérer le statut du serveur.",
CONNECTION_ERROR:"Erreur de connexion.",

register:"S'inscrire",
enterCredentials:"Veuillez entrer le nom d'utilisateur et le mot de passe.",

accountPanelTitle:"Panneau de Compte",
dashboardTitle:"Tableau de bord",
charactersTitle:"Personnages",

login:"Connexion",
logout:"Déconnexion",
changePassword:"Changer le mot de passe",
save:"Enregistrer",
cancel:"Annuler",

username:"Nom d'utilisateur",
password:"Mot de passe",
currentPassword:"Mot de passe actuel",
newPassword:"Nouveau mot de passe",
confirmPassword:"Confirmer le mot de passe",

loginServerUnavailable:"Serveur de connexion indisponible.",
connectionError:"Erreur de connexion.",
loginFailed:"Échec de la connexion.",

charactersLoadError:"Impossible de charger les personnages.",
noCharacters:"Aucun personnage trouvé.",
characterApiError:"Erreur API personnages.",

passwordsDontMatch:"Les mots de passe ne correspondent pas.",
unknownError:"Erreur inconnue.",

dungeon1:"Grand Temple Shadolean",
dungeon2:"Ancienne Route Souterraine d'Hadin",
dungeon3:"Tumulus Mysree",
dungeon4:"Le Tunnel au-delà du Pont",
dungeon5:"Erte Deenan",


hcFullDescription:
"Découvrez la plus grande mise à jour de l'histoire de DDON — le nouveau mode Hardcore ! Exclusif à ce serveur ! Une aventure intense avec une seule vie — une mort signifie la fin définitive.",

bossRushDescription:
"Les Boss Rush Dungeons sont des donjons Endgame accessibles uniquement via le canal Boss Rush. Donjons actuellement disponibles : Grand Temple Shadolean, Ancienne Route Souterraine d'Hadin, Tumulus Mysree (ancien Tertre Funéraire Antique), Le Tunnel au-delà du Pont et le nouveau donjon Erte Deenan. Relevez un défi intense et exigeant en endgame !",

customFeatures:"Fonctionnalités Personnalisées",
customTitle:"Fonctionnalités Exclusives du Serveur",
customSubtitle:"Disponibles uniquement sur DDON Revival",

hcTitle:"Mode Hardcore",
hcText:"Hardcore est le nouveau mode de jeu personnalisé. Vivez une aventure intense avec une seule vie — si vous mourez, c'est terminé.",

customContentTitle:"Contenu Personnalisé",
customContentText:"Quêtes et récompenses uniques.",
eventsTitle:"Événements Spéciaux",
eventsText:"Événements saisonniers exclusifs au serveur.",

cf_block1:"Fonctionnalités Personnalisées",
cf_1:"Cours disponibles !",
cf_2:"Cours de stockage actif en permanence",
cf_3:"Recharge gratuite des Green Revive Gems",
cf_4:"Tous les coffres visibles dans la salle de craft",
cf_5:"Groupe de 8 joueurs avec /invite",

cf_block2:"Contenu Personnalisé",
cf_6:"Bonus Dungeons devenus Endgame",
cf_7:"Tickets disponibles via PP Shop",
cf_8:"Dungeons actuels : R, XP",

cf_block3:"Systèmes de Confort",
cf_9:"Limite PP augmentée à 2 000 000",
cf_10:"Durée du Bazaar augmentée à 30 jours",
cf_11:"Production augmentée à 100",
cf_12:"Recyclage augmenté à 50",
cf_13:"Golden Dragon Mark à 200",
cf_14:"Silver Dragon Mark à 500",
cf_15:"Les Pions gagnent EXP et JP",

cf_block4:"Canaux Personnalisés",
cf_16:"Canal Collab exclusif",
cf_17:"Canal ennemis anciens + nouveaux",
cf_18:"Canal Boss Rush",

cf_block5:"Collaboration EXM",
cf_19:"Ghosts & Goblins",
cf_20:"Attack on Titan",
cf_21:"Monster Hunter",
cf_22:"Street Fighter",
cf_23:"Pijama",


howto:{
step1Title:"1️⃣ Téléchargement",
step1Text:"Téléchargez le client principal (~36GB).",
fullClient:"Client Complet",
multiClient:"Version Multipart",
quotaInfo:"En cas d'erreur de quota, téléchargez le dossier.",

step2Title:"2️⃣ Extraction",
step2Text:"Utilisez WinRAR ou 7Zip.",
unzipWarning:"OneDrive ne fonctionne pas comme destination.",

step3Title:"3️⃣ Launcher",
step3Text:"Lancez ddo_launcher.exe en administrateur.",

step4Title:"4️⃣ Configuration",
step4Text:"Vérifiez que le serveur est ddon.org.",

step5Title:"5️⃣ Inscription",
step5Text:"Créez un compte dans le launcher.",

step6Title:"6️⃣ Démarrage",
step6Text:"Connectez-vous ou installez le patch anglais.",

step7Title:"7️⃣ Début",
step7Text:"Terminez le tutoriel."
},

downloadLinks:{
    full:"https://onedrive.live.com/?cid=d03bbc39b7e96cf2&id=D03BBC39B7E96CF2%21s41ce4966967e409aa3c76c91656cd3fd&resid=D03BBC39B7E96CF2%21s41ce4966967e409aa3c76c91656cd3fd&e=MOHgnr&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3UvYy9kMDNiYmMzOWI3ZTk2Y2YyL0VXWkp6a0YtbHBwQW84ZHNrV1ZzMF8wQnV3Yi02cDhJZUdFejduLW5zeWFxa1E%5FZT1NT0hnbnI&v=validatepermission",
    multi:"https://drive.google.com/drive/folders/1FOAOGG14IKbK1i0jZGEm94ewBagWx6qw?usp=drive_link",
},

jobs:{
"Fighter":"Guerrier",
"Seeker":"Éclaireur",
"Hunter":"Chasseur",
"Priest":"Prêtre",
"Shield Sage":"Sage du Bouclier",
"Sorcerer":"Sorcier",
"Warrior":"Berserker",
"Element Archer":"Archer Élémentaire",
"Alchemist":"Alchimiste",
"Spirit Lancer":"Lancier Spirituel",
"High Scepter":"Grand Sceptre"
}
},

/* =========================================================
   🇬🇷 GREEK
========================================================= */

gr:{
home:"Αρχική",
news:"Νέα",
status:"Κατάσταση Διακομιστή",
leaderboard:"Πίνακας Κατάταξης",
download:"Λήψη",

title:"Dragon's Dogma Online",
subtitle:"Μεγαλύτερος Server • Hardcore",

newsTitle:"Τελευταία Νέα",
news1Title:"Άνοιγμα Διακομιστή",
news1Text:"Το DDON είναι online!",
news2Title:"Hardcore Mode",
news2Text:"Hardcore Mode ενεργό.",

serverStatusTitle:"Κατάσταση Διακομιστή",
statusLabel:"Κατάσταση",
playersLabel:"Παίκτες",
online:"Online",
offline:"Offline",
totalPlayers:"Σύνολο Παικτών Online",

leaderboardTitle:"Πίνακας Κατάταξης",
normalTab:"Κανονικό",
hcTab:"Hardcore",
searchPlaceholder:"Αναζήτηση παίκτη...",
level:"Επίπεδο",
classes:"Κλάσεις",
hcSince:"Hardcore Από",
hcStatus:"Κατάσταση",
alive:"Ζωντανός",
dead:"Νεκρός",
noPlayersFound:"Δεν βρέθηκαν παίκτες",
howToPlay:"Πώς να Παίξεις",
wiki:"Wiki",

resetPasswordTitle:"Επαναφορά Κωδικού",
resetPasswordBtn:"Επαναφορά Κωδικού",
forgotPassword:"Ξεχάσατε τον κωδικό;",
sendResetLink:"Αποστολή Συνδέσμου Επαναφοράς",
RESET_EMAIL_SENT_IF_EXISTS:"Εάν το email υπάρχει, στάλθηκε σύνδεσμος επαναφοράς.",

emailSettings:"Ρυθμίσεις Email",
enterEmail:"Εισάγετε τη διεύθυνση email σας",
saveEmail:"Αποθήκευση Email",
noEmailSet:"Δεν έχει οριστεί email.",
emailNotVerified:"Το email {email} δεν έχει επιβεβαιωθεί.",
emailVerified:"Το email {email} έχει επιβεβαιωθεί.",
EMAIL_VERIFICATION_SENT:"Το email επιβεβαίωσης στάλθηκε.",
SET_EMAIL_FAILED:"Αποτυχία ορισμού email.",
INVALID_EMAIL:"Μη έγκυρη διεύθυνση email.",
EMAIL_VERIFIED_SUCCESS:"Το email επιβεβαιώθηκε επιτυχώς!",

LEADERBOARD_FAILED:"Αποτυχία φόρτωσης πίνακα κατάταξης.",
CHANNEL_STATUS_FAILED:"Αποτυχία φόρτωσης κατάστασης καναλιού.",
email:"Email",

LOGIN_SUCCESS:"Η σύνδεση ήταν επιτυχής.",
LOGIN_FAILED:"Αποτυχία σύνδεσης.",
LOGIN_SERVER_UNAVAILABLE:"Ο διακομιστής σύνδεσης δεν είναι διαθέσιμος.",

MISSING_FIELDS:"Λείπουν υποχρεωτικά πεδία.",
INVALID_USERNAME:"Μη έγκυρο όνομα χρήστη.",
USER_NOT_FOUND:"Ο χρήστης δεν βρέθηκε.",
WRONG_PASSWORD:"Λάθος κωδικός πρόσβασης.",

REGISTER_FAILED:"Η εγγραφή απέτυχε.",
REGISTER_SUCCESS:"Ο λογαριασμός δημιουργήθηκε επιτυχώς. Μπορείτε να συνδεθείτε.",

PASSWORD_CHANGED_SUCCESS:"Ο κωδικός άλλαξε επιτυχώς.",
PASSWORD_TOO_SHORT:"Ο κωδικός πρέπει να έχει τουλάχιστον 6 χαρακτήρες.",
PASSWORDS_DONT_MATCH:"Οι κωδικοί δεν ταιριάζουν.",

INVALID_TOKEN:"Μη έγκυρο ή ληγμένο token.",
NO_TOKEN:"Δεν παρέχεται token αυθεντικοποίησης.",
SUCCESS_PASSWORD_RESET:"Ο κωδικός ενημερώθηκε επιτυχώς.",

LOGOUT_SUCCESS:"Αποσυνδεθήκατε επιτυχώς.",
NOT_LOGGED_IN:"Δεν είστε συνδεδεμένος.",

UNKNOWN_ERROR:"Άγνωστο σφάλμα.",
DATABASE_ERROR:"Σφάλμα βάσης δεδομένων.",
STATUS_FAILED:"Αποτυχία λήψης κατάστασης διακομιστή.",
CONNECTION_ERROR:"Σφάλμα σύνδεσης.",

register:"Εγγραφή",
enterCredentials:"Εισάγετε όνομα χρήστη και κωδικό πρόσβασης.",

accountPanelTitle:"Πίνακας Λογαριασμού",
dashboardTitle:"Πίνακας Ελέγχου",
charactersTitle:"Χαρακτήρες",

login:"Σύνδεση",
logout:"Αποσύνδεση",
changePassword:"Αλλαγή Κωδικού",
save:"Αποθήκευση",
cancel:"Ακύρωση",

username:"Όνομα χρήστη",
password:"Κωδικός πρόσβασης",
currentPassword:"Τρέχων κωδικός",
newPassword:"Νέος κωδικός",
confirmPassword:"Επιβεβαίωση κωδικού",

loginServerUnavailable:"Ο διακομιστής σύνδεσης δεν είναι διαθέσιμος.",
connectionError:"Σφάλμα σύνδεσης.",
loginFailed:"Αποτυχία σύνδεσης.",

charactersLoadError:"Αδυναμία φόρτωσης χαρακτήρων.",
noCharacters:"Δεν βρέθηκαν χαρακτήρες.",
characterApiError:"Σφάλμα API χαρακτήρων.",

passwordsDontMatch:"Οι κωδικοί δεν ταιριάζουν.",
unknownError:"Άγνωστο σφάλμα.",

dungeon1:"Μεγάλος Ναός Shadolean",
dungeon2:"Παλαιός Υπόγειος Δρόμος Hadin",
dungeon3:"Τύμβος Mysree",
dungeon4:"Το Τούνελ Πέρα από τη Γέφυρα",
dungeon5:"Erte Deenan",

hcFullDescription:
"Ζήσε το μεγαλύτερο update στην ιστορία του DDON — το νέο Hardcore Mode! Αποκλειστικά εδώ! Μία ζωή, μία ευκαιρία — ένας θάνατος σημαίνει οριστικό τέλος.",

bossRushDescription:
"Τα Boss Rush Dungeons είναι Endgame dungeons προσβάσιμα μόνο μέσω του Boss Rush Channel. Διαθέσιμα αυτή τη στιγμή: Μεγάλος Ναός Shadolean, Παλαιός Υπόγειος Δρόμος Hadin, Τύμβος Mysree (πρώην Αρχαίος Ταφικός Τύμβος), Το Τούνελ Πέρα από τη Γέφυρα και το νέο dungeon Erte Deenan. Αντιμετώπισε μια έντονη και απαιτητική endgame πρόκληση!",

customFeatures:"Προσαρμοσμένες Λειτουργίες",
customTitle:"Αποκλειστικές Λειτουργίες Διακομιστή",
customSubtitle:"Διαθέσιμες μόνο στο DDON Revival",

hcTitle:"Hardcore Mode",
hcText:"Το Hardcore είναι το νέο προσαρμοσμένο game mode. Ζήσε μια συναρπαστική περιπέτεια με μία μόνο ζωή — αν πεθάνεις, τελείωσε.",

customContentTitle:"Προσαρμοσμένο Περιεχόμενο",
customContentText:"Μοναδικές αποστολές και ανταμοιβές.",
eventsTitle:"Ειδικές Εκδηλώσεις",
eventsText:"Εποχιακές εκδηλώσεις αποκλειστικές στον διακομιστή.",

cf_block1:"Προσαρμοσμένες Λειτουργίες",
cf_1:"Διαθέσιμα μαθήματα!",
cf_2:"Μόνιμα ενεργό Storage Course",
cf_3:"Δωρεάν αναπλήρωση Green Revive Gems",
cf_4:"Όλα τα κουτιά ορατά στο Craft Room",
cf_5:"Ομάδα 8 παικτών με /invite",

cf_block2:"Προσαρμοσμένο Περιεχόμενο",
cf_6:"Bonus Dungeons ως Endgame",
cf_7:"Εισιτήρια μέσω PP Shop",
cf_8:"Τρέχοντα: R, XP",

cf_block3:"Συστήματα Ποιότητας Ζωής",
cf_9:"Όριο PP 2.000.000",
cf_10:"Bazaar 30 ημέρες",
cf_11:"Παραγωγή 100",
cf_12:"Ανακύκλωση 50",
cf_13:"Golden Dragon Mark 200",
cf_14:"Silver Dragon Mark 500",
cf_15:"Τα Pawns κερδίζουν EXP και JP",

cf_block4:"Προσαρμοσμένα Κανάλια",
cf_16:"Κανάλι Collab EXM",
cf_17:"Κανάλι παλιών + νέων εχθρών",
cf_18:"Κανάλι Boss Rush",

cf_block5:"Συνεργασίες EXM",
cf_19:"Ghosts & Goblins",
cf_20:"Attack on Titan",
cf_21:"Monster Hunter",
cf_22:"Street Fighter",
cf_23:"Pijama",


howto:{
step1Title:"1️⃣ Λήψη",
step1Text:"Κατεβάστε τον βασικό client (~36GB).",
fullClient:"Πλήρης Client",
multiClient:"Multipart Έκδοση",
quotaInfo:"Σε περίπτωση ορίου Google Drive κατεβάστε τον φάκελο.",

step2Title:"2️⃣ Αποσυμπίεση",
step2Text:"Χρησιμοποιήστε WinRAR ή 7Zip.",
unzipWarning:"Το OneDrive δεν λειτουργεί ως τοποθεσία εγκατάστασης.",

step3Title:"3️⃣ Εκκίνηση Launcher",
step3Text:"Τρέξτε το ddo_launcher.exe ως διαχειριστής.",

step4Title:"4️⃣ Ρυθμίσεις",
step4Text:"Βεβαιωθείτε ότι ο server είναι ddon.org.",

step5Title:"5️⃣ Εγγραφή",
step5Text:"Δημιουργήστε λογαριασμό στο launcher.",

step6Title:"6️⃣ Έναρξη Παιχνιδιού",
step6Text:"Συνδεθείτε ή εγκαταστήστε το αγγλικό patch.",

step7Title:"7️⃣ Ξεκίνημα",
step7Text:"Ολοκληρώστε το tutorial."
},

downloadLinks:{
    full:"https://onedrive.live.com/?cid=d03bbc39b7e96cf2&id=D03BBC39B7E96CF2%21s41ce4966967e409aa3c76c91656cd3fd&resid=D03BBC39B7E96CF2%21s41ce4966967e409aa3c76c91656cd3fd&e=MOHgnr&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3UvYy9kMDNiYmMzOWI3ZTk2Y2YyL0VXWkp6a0YtbHBwQW84ZHNrV1ZzMF8wQnV3Yi02cDhJZUdFejduLW5zeWFxa1E%5FZT1NT0hnbnI&v=validatepermission",
    multi:"https://drive.google.com/drive/folders/1FOAOGG14IKbK1i0jZGEm94ewBagWx6qw?usp=drive_link",
},

jobs:{
"Fighter":"Πολεμιστής",
"Seeker":"Εξερευνητής",
"Hunter":"Κυνηγός",
"Priest":"Ιερέας",
"Shield Sage":"Σοφός Ασπίδας",
"Sorcerer":"Μάγος",
"Warrior":"Βάρβαρος",
"Element Archer":"Τοξότης Στοιχείων",
"Alchemist":"Αλχημιστής",
"Spirit Lancer":"Λογχοφόρος Πνεύματος",
"High Scepter":"Ύπατο Σκήπτρο"
}
}

};
