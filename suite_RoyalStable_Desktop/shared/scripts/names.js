import { RegularExpression, Wildcard } from 'objectmaphelper.js';


export var games_menu_environment = {"title": "Games Menu", "type": "BrowserTab"};
export var search_game_field = {"container": games_menu_environment, "id": "searchField", "tagName": "INPUT", "type": "text", "visible": true};
export var cheats_field = {"container": games_menu_environment, "id": "cheatField", "tagName": "INPUT", "type": "text", "visible": true};
export var selected_game = {"container": games_menu_environment, "tagName": "div", "className": "game-box", "visible": true};
export var open_game_new_tab_btn = {"container": games_menu_environment, "id": "openBtn", "tagName": "div", "visible": true};
export var open_new_tab_btn = {"container": games_menu_environment, "id": "openBtn", "tagName": "DIV", "visible": true};
export var launch_game_button = {"container": games_menu_environment, "id": "playBtn", "tagName": "DIV", "visible": true};
export var clear_game_session_btn = {"container": games_menu_environment, "id": "cleanBtn", "tagName": "DIV", "visible": true};
export var alertPopup = "AlertPopup";
export var game_tab = {"title": "SF`275", "type": "BrowserTab"};
//export var game_tab = {"title": "Game Launching", "type": "BrowserTab"};
export var canvas = {"container": game_tab, "id": "c2canvas", "tagName": "CANVAS", "visible": true};
export var hud = {"container": game_tab, "simplifiedInnerText": "Total Bet €20 Bet €1 Auto Turbo Lines 20 Total Win", "tagName": "DIV", "visible": true};
export var total_win = {"container": game_tab, "id": "total_win", "tagName": "SPAN", "visible": true};
export var total_bet = {"container": game_tab, "id": "total_bet", "tagName": "SPAN", "visible": true};
export var lines = {"container": game_tab, "id": "lines", "tagName": "SPAN", "visible": true};
export var bet_currency = {"container": game_tab, "id": "bet_currency", "tagName": "SPAN", "visible": true};
export var game_session = {"container": game_tab, "id": "session_id", "tagName": "DIV", "visible": true};
export var balance = {"container": game_tab, "id": "balance", "tagName": "DIV", "visible": true};
export var bet_more2 = {"container": game_tab, "id": "bets_increase", "tagName": "DIV", "visible": true};
export var bet_less = {"container": game_tab, "id": "bets_decrease", "tagName": "DIV", "visible": true};
export var play_btn = {"container": game_tab, "id": "btn_play", "tagName": "div", "visible": true};
export var stop_btn = {"container": game_tab, "id": "btn_stop", "tagName": "div", "visible": true};
export var autoplay_btn = {"container": game_tab, "id": "autoPlay_button_", "tagName": "path", "visible": true};
export var turbo_btn = {"container": game_tab, "id": "turbo_switch", "tagName": "div", "visible": true};
export var lines_less = {"container": game_tab, "id": "lineslist_decrease", "tagName": "DIV", "visible": true};
export var lines_more = {"container": game_tab, "id": "lineslist_increase", "tagName": "DIV", "visible": true};
export var close_error = {"container": game_tab, "simplifiedInnerText": "Close", "tagName": "BUTTON", "type": "submit", "visible": true};
export var free_spins = {"container": game_tab, "id": "free_spins", "tagName": "SPAN", "visible": true};
export var spin_win = {"container": game_tab, "id": "spin_win", "tagName": "SPAN", "visible": true};
export var fs_multiplier = {"container": game_tab, "id": "multiplier", "tagName": "SPAN", "visible": true};
export var fs_spin_win = {"container": game_tab, "id": "spin_win", "tagName": "SPAN", "visible": true};
export var sound_btn = {"container": game_tab, "id": "soundenabled_alter", "tagName": "DIV", "visible": true};
export var info_btn = {"container": game_tab, "id": "popup_info", "tagName": "DIV", "visible": true};
export var history_btn = {"container": game_tab, "id": "show_history", "tagName": "DIV", "visible": true};
export var popup_close_button = {"container": game_tab, "id": "s_popup_close", "tagName": "DIV", "visible": true};
export var paytable_button = {"container": game_tab, "id": "popup_paytable", "tagName": "DIV", "visible": true};
export var coordinates2 = "{title='Sheldon Games Menu' type='BrowserTab'}.DOCUMENT.HTML1.BODY1.DIV1.SECTION1.DIV1.DIV1.DIV1.DIV1.I1";
export var error_title = "{title='SF`275' type='BrowserTab'}.DOCUMENT.HTML1.BODY1.DIV7.DIV1.DIV1.SECTION1";
export var sF61BrowserTab = {"title": "SF`61", "type": "BrowserTab"};
export var sF61C2canvasCANVAS = {"container": sF61BrowserTab, "id": "c2canvas", "tagName": "CANVAS", "visible": true};
//export var lines_less = {"container": game_tab, "id": "BetLess_", "occurrence": 2, "tagName": "path", "visible": true};
//export var lines_more = {"container": game_tab, "id": "BetMore_", "occurrence": 2, "tagName": "path", "visible": true};
export var autoplay_container = {"container": game_tab, "id": "autoplay_container", "tagName": "DIV", "visible": true};
export var loss_limit = {"container": game_tab, "id": "autoBtn_2", "simplifiedInnerText": 10, "tagName": "BUTTON", "type": "submit", "visible": true};
export var auto_games_10 = {"container": game_tab, "id": "autoBtn_2", "simplifiedInnerText": 10, "tagName": "BUTTON", "type": "submit", "visible": true};
export var auto_games_25 = {"container": game_tab, "id": "autoBtn_2", "simplifiedInnerText": 25, "tagName": "BUTTON", "type": "submit", "visible": true};
export var auto_games_50 = {"container": game_tab, "id": "autoBtn_2", "simplifiedInnerText": 50, "tagName": "BUTTON", "type": "submit", "visible": true};
export var auto_games_100 = {"container": game_tab, "id": "autoBtn_2", "simplifiedInnerText": 100, "tagName": "BUTTON", "type": "submit", "visible": true};
export var sF275TotalBet20TotalWin0EndBalance788971606TD = {"container": game_tab, "simplifiedInnerText": "Total Bet: €20 Total Win: €0 End Balance: €7,889,716.06", "tagName": "TD", "visible": true};
export var sF27507042021065749TD = {"container": game_tab, "simplifiedInnerText": "07-04-2021 06:57:49", "tagName": "TD", "visible": true};
export var history_details_button = "{title='SF`275' type='BrowserTab'}.DOCUMENT.HTML1.BODY1.DIV2.DIV1.DIV3.DIV1.DIV1.DIV3.TABLE1.TBODY1.TR2.TD4";
export var game_history_tr = {"container": game_tab, "tagName": "TD", "visible": true};
export var sF275786b696eAc124b0aAa48B8d587954985TD = {"container": game_tab, "simplifiedInnerText": "786b696e-ac12-4b0a-aa48-b8d587954985", "tagName": "TD", "visible": true};
export var titleSF275TypeBrowserTabDOCUMENTHTML1BODY1DIV2DIV1DIV2DIV1DIV2DIV3DIV2Svg1G1Path2 = "{title='SF`275' type='BrowserTab'}.DOCUMENT.HTML1.BODY1.DIV2.DIV1.DIV2.DIV1.DIV2.DIV3.DIV2.svg1.g1.path2";
export var titleGamesMenuTypeBrowserTabDOCUMENTHTML1BODY1DIV1SECTION1DIV1DIV2DIV3DIV8DIV1DIV2IMG1 = "{title='Games Menu' type='BrowserTab'}.DOCUMENT.HTML1.BODY1.DIV1.SECTION1.DIV1.DIV2.DIV3.DIV8.DIV1.DIV2.IMG1";
export var titleGamesMenuTypeBrowserTabDOCUMENTHTML1BODY1DIV1SECTION1DIV1DIV2DIV2DIV2DIV2I1 = "{title='Games Menu' type='BrowserTab'}.DOCUMENT.HTML1.BODY1.DIV1.SECTION1.DIV1.DIV2.DIV2.DIV2.DIV2.I1";
export var projectsJIRABrowserTab = {"title": "Projects - JIRA", "type": "BrowserTab"};
export var titleSF275TypeBrowserTabDOCUMENTHTML1BODY1DIV2DIV1DIV2DIV1DIV2DIV3DIV3DIV1DIV1Svg1G1G1Path1 = "{title='SF`275' type='BrowserTab'}.DOCUMENT.HTML1.BODY1.DIV2.DIV1.DIV2.DIV1.DIV2.DIV3.DIV3.DIV1.DIV1.svg1.g1.g1.path1";
export var window = "[Window]";
export var titleGamesMenuTypeBrowserTabDOCUMENTHTML1BODY1DIV1SECTION1DIV1DIV2DIV3DIV1DIV1DIV2IMG1 = "{title='Games Menu' type='BrowserTab'}.DOCUMENT.HTML1.BODY1.DIV1.SECTION1.DIV1.DIV2.DIV3.DIV1.DIV1.DIV2.IMG1";
export var browserTab0DOCUMENT = "BrowserTab_0.DOCUMENT";
export var sF282BrowserTab = {"title": "SF`282", "type": "BrowserTab"};
export var sF282C2canvasCANVAS = {"container": sF282BrowserTab, "id": "c2canvas", "tagName": "CANVAS", "visible": true};
export var sF282TotalBetSPAN = {"container": sF282BrowserTab, "simplifiedInnerText": "Total Bet", "tagName": "SPAN", "visible": true};
export var titleSF282TypeBrowserTabDOCUMENTHTML1BODY1DIV2DIV1DIV2DIV1DIV2DIV3DIV3DIV1DIV1Svg1G1G1Path1 = "{title='SF`282' type='BrowserTab'}.DOCUMENT.HTML1.BODY1.DIV2.DIV1.DIV2.DIV1.DIV2.DIV3.DIV3.DIV1.DIV1.svg1.g1.g1.path1";
export var titleSF275TypeBrowserTabDOCUMENTHTML1BODY1DIV5DIV1DIV1SECTION1 = "{title='SF`275' type='BrowserTab'}.DOCUMENT.HTML1.BODY1.DIV5.DIV1.DIV1.SECTION1";
export var autoPlayCounter = {"container": game_tab, "id": "autoplay", "tagName": "DIV", "visible": true};
export var gamesMenuSelectOne = {"container": games_menu_environment, "tagName": "SELECT", "type": "select-one", "visible": true};
export var clearCheat = "{title='Games Menu' type='BrowserTab'}.DOCUMENT.HTML1.BODY1.DIV1.SECTION1.DIV2.DIV3.DIV6.DIV1.I1";
export var sF275BetMorePath = {"container": game_tab, "id": "BetMore_", "tagName": "path", "visible": true};
export var sF275BetLessPath = {"container": game_tab, "id": "BetLess_", "tagName": "path", "visible": true};
export var testBetIncreas = {"id": "bets_increase", "disabled": "disabled"};
export var titleSF281TypeBrowserTabDOCUMENTHTML1BODY1DIV2DIV1DIV2DIV1DIV2DIV3DIV3DIV1DIV1Svg1G1G1Path1 = "{title='SF`281' type='BrowserTab'}.DOCUMENT.HTML1.BODY1.DIV2.DIV1.DIV2.DIV1.DIV2.DIV3.DIV3.DIV1.DIV1.svg1.g1.g1.path1";
export var titleSF281TypeBrowserTabDOCUMENTHTML1BODY1DIV2DIV1DIV2DIV1DIV2DIV3DIV3DIV1DIV2Svg1G1Path1 = "{title='SF`281' type='BrowserTab'}.DOCUMENT.HTML1.BODY1.DIV2.DIV1.DIV2.DIV1.DIV2.DIV3.DIV3.DIV1.DIV2.svg1.g1.path1";
export var bet_unclickable = {"container": game_tab, "className": "unclickable"};
//export var gamesMenuSelectOne_2 = {"container": games_menu_environment, "occurrence": 5, "tagName": "SELECT", "type": "select-one", "visible": true};
export var selectPlayerMenu = {"container": games_menu_environment, "occurrence": 3, "tagName": "SELECT", "type": "select-one", "visible": true};
