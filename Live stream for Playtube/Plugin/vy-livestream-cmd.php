<?php

/*
# Live Stream Plugin.
# Copyright 2022 by Vanea Young
*/
 
require_once('assets/init.php');
$pt->page = 'live';
$side_header = 'not-logged';
$announcement_html = '';
if (IS_LOGGED == true) {
    $side_header = 'loggedin';
}
// api 
if(isset($_POST['source']) && $_POST['source'] == 'api'){
	
 return API_SendNotification();
 exit();
 
}
 


if (!IS_LOGGED) {
	
		header('Location: ' . PT_Link('404'));
		exit;
}


try {
  
	// build engine
	$core = new VY_LIVESTREAM_CORE;
    $live = $core->im_live();
 
 
	// get param
	$cmd = isset($_GET['cmd']) ? $core->test_input($_GET['cmd']) : ( isset($_POST['cmd']) ? $core->test_input($_POST['cmd']) : '');
	$view_as_json = isset($_GET['view_as']) ? $core->test_input($_GET['view_as']) : ( isset($_POST['view_as']) ? $core->test_input($_POST['view_as']) : '');
	$id = isset($_GET['id']) ? $core->test_input($_GET['id']) : ( isset($_POST['id']) ? $core->test_input($_POST['id']) : '');

	switch ($cmd){
	case 'getComments':
	echo $core->jencode($live->getComments($id));
	break;
	case 'getProductDetails':
	echo $core->jencode($live->getTopProduct($id));
	break;
	case 'replayproductbroadcast':
	$live->replayproductbroadcast($id);
	break;	
	case 'validatePlaytubeVideo':
	$live->validatePlaytubeVideo();
	break;
	case 'watchstream':
	header("location: /");
	exit();
	break;
	case 'get-content':
	$live->getContent();
	break;
	case 'popup':
	$live->getPopup();
	break;
	case 'get-prelive-st':
	echo $live->getPreLiveSt();
	break;
	case 'golive':
	$live->goLive();
	break;
	case 'stoplive':
	$live->stopLive();
	break;
	case 'join_live': 
	$live->joinLive();
	break;
	case 'addcomment':
	echo $live->AddComment();
	break;
	case 'showdashboard':
	echo $live->showdashboard();
	break;
	case 'get-viewers':
	echo $live->getViewers();
	break;
	case 'get-available-for-moder':
	echo $live->availableViewersForModerator();
	break;
	case 'remove-moderators':
	echo $live->removeModerators();
	break;
	case 'get-userdetails':
	echo json_encode($live->lv_getUserDetails($id));
	break;
	case 'generate-stream-key':
	echo $live->generateUniqueStreamKey();
	break;
	case 'record':
	$live->recording();
	break;
	case 'rename-obs-file':
	$live->renameObsFile();
	break;
	case 'delete-crashed':
	echo $live->delete_crashed();
	break;
	case 'delete-broadcast':
	$live->deleteShortVideos();
	break;
	case 'remove-files':
	$live->removeFiles();
	break;
	case 'mob_popup':
	$live->mob_popup();
	break;
	case 'get-turn-credentials':
	echo $live->getTurnCredentials();
	break;
	case 'generateCover':
	$live->generateCover();
	break;
	case 'get_rtmp_hls_path':
	echo $live->getRtmpHLS_Path();
	break;
	case 'blueimpupload':
	$live->blueimpupload();
	break;
	case 'get-products-sugg':
	$live->getProductsSugg();
	break;
	case 'openuser':
	$core->openUser();
	break;
	case 'getProductDetailsModal':
	$live->getProductDetailsModal($id);
	break;
	case 'get-fullsize-modal':
	$live->getFullSizeModal();
	break;
	case 'insertocart':
	$live->insertProductToCart($id);
	break;
	case 'deleteFromCart':
	$live->deleteProductFromCart($id);
	break;
	case 'deleteProduct':
	echo $live->deleteProduct($id);
	break;
	case 'setproductdefcover':
	$live->changeProductDefCover();
	break;
	case 'isbroadcastalive':
	echo $live->isLiveNow($id);
	break;
	case 'delete_stream':
	$live->delete_stream($id);
	break;
	default:

		$final_content = PT_LoadPage('container', array(
		    'CONTAINER_TITLE' => $core->lang['page_title_go_live'],
		    'CONTAINER_DESC' => $core->lang['page_title_go_live'],
		    'CONTAINER_KEYWORDS' => $core->lang['page_title_go_live'],
		    'CONTAINER_CONTENT' => $live->constructPage(),
		    'ANNOUNCEMENT'     => $announcement_html,
		    'IS_LOGGED' => (IS_LOGGED == true) ? 'data-logged="true"' : '',
		    'MAIN_URL' => $pt->actual_link,

		    'HEADER_LAYOUT' => PT_LoadPage('header/content', array(
		        'SIDE_HEADER' => PT_LoadPage("header/$side_header"),
		        'SEARCH_KEYWORD' => (!empty($_GET['keyword'])) ? PT_Secure($_GET['keyword']) : ''
		    )),
		    'FOOTER_LAYOUT' => null,
		    'OG_METATAGS' => null,
		    'EXTRA_JS' => PT_LoadPage('extra-js/content'),
		    'MODE' => (($pt->mode == 'night') ? 'checked' : ''),

		    'RIGHT_AD' => PT_GetAd('right_side'),
		    'LEFT_AD' => PT_GetAd('left_side'),
		    'FOOTER_AD' => ($pt->page != 'register' && $pt->page != 'login') ? PT_GetAd('footer') : '',
		    'HEADER_AD' => PT_GetAd('header'),
		));


		echo $final_content;
 
	break;
	
	
	}
	
	} catch (Exception $e) {
	print $e->getMessage();
}
