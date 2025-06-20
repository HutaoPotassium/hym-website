//栏目切换函数
function showContent(sectionId) {
	const sections = document.querySelectorAll('.game-section');

	// 遍历并隐藏所有区域
	sections.forEach(section => {
		section.classList.remove('active');
	});

	// 显示指定区域
	const target = document.getElementById(sectionId);
	if (target) {
		target.classList.add('active');
	}
}

// 点击“开始”按钮时
window.startExperience = function() {
	document.getElementById("welcome").style.display = "none";
	document.querySelector("main").style.display = "block";
	document.getElementById("footer").style.display = "block";

	currentList = [...musicLists[defaultList]];
	fallbackToDefault = true;
	isPersistentMode = false;
	playRandom();
};

const musicLists = {
	hoyomix: [{
			src: "music/hym/HOYO-MiX - Circle of Life.ogg",
			name: "正在播放：Circle of Life"
		},
		{
			src: "music/hym/HOYO-MiX - Da Capo.ogg",
			name: "正在播放：Da capo"
		},
		{
			src: "music/hym/HOYO-MiX - Domineer.ogg",
			name: "正在播放：Domineer"
		},
		{
			src: "music/hym/HOYO-MiX - Serene and Fathomless 行水盈盈.ogg",
			name: "正在播放：Serene and Fathomless 行水盈盈"
		},
		{
			src: "music/hym/HOYO-MiX - 裁红落似锦 Le cramoisi coulant comme Cin.ogg",
			name: "正在播放：裁红落似锦 <br>Le cramoisi coulant comme Cin"
		},
		{
			src: "music/hym/HOYO-MiX - 刺拳如毒蜂！ Sting Like a Bee!.ogg",
			name: "正在播放：刺拳如毒蜂！ Sting Like a Bee!"
		},
		{
			src: "music/hym/HOYO-MiX - 飞光 A Flash.ogg",
			name: "正在播放：飞光 A Flash"
		},
		{
			src: "music/hym/HOYO-MiX - 极效方案 Note of Effective Settlements.ogg",
			name: "正在播放：极效方案 <br>Note of Effective Settlements"
		},
		{
			src: "music/hym/HOYO-MiX - 七帷的暮雨 Rain of Seven Curtains.ogg",
			name: "正在播放：七帷的暮雨 <br>Rain of Seven Curtains"
		},
		{
			src: "music/hym/HOYO-MiX - 浅露的香调 Notes Aeriennes.ogg",
			name: "正在播放：浅露的香调 Notes Aeriennes"
		},
		{
			src: "music/hym/HOYO-MiX - 霜烈竞逐 Nippy Bout.ogg",
			name: "正在播放：霜烈竞逐 Nippy Bout"
		},
		{
			src: "music/hym/HOYO-MiX - 思接千载 Cogitation of Epochs.ogg",
			name: "正在播放：思接千载 Cogitation of Epochs"
		},
		{
			src: "music/hym/HOYO-MiX _ Aimer - 未行之路 The Road Not Taken.ogg",
			name: "正在播放：未行之路 The Road Not Taken"
		},
		{
			src: "music/hym/阿云嘎 _ HOYO-MiX - Regression.ogg",
			name: "正在播放：Regression"
		},
		{
			src: "music/hym/陈致逸 _ HOYO-MiX - Rex Incognito 尘世闲游.ogg",
			name: "正在播放：Rex Incognito 尘世闲游"
		},
		{
			src: "music/hym/黄霄雲 _ HOYO-MiX - ReOracle.ogg",
			name: "正在播放：ReOracle"
		},
		{
			src: "music/hym/希林娜依高 _ HOYO-MiX - 烬火 Emberfire.ogg",
			name: "正在播放：烬火 Emberfire"
		},
		{
			src: "music/hym/周深 - Rubia.ogg",
			name: "正在播放：Rubia"
		}
	],
	genshin: [{
			src: "music/genshin/HOYO-MiX - Chatter Between Roots 根子的片语.ogg",
			name: "正在播放：Chatter Between Roots 根子的片语"
		},
		{
			src: "music/genshin/HOYO-MiX - For Riddles, for Wonders 几初的智愿.ogg",
			name: "正在播放：For Riddles, for Wonders 几初的智愿"
		},
		{
			src: "music/genshin/HOYO-MiX - Hustle and Bustle of Ormos 喧繁之港.ogg",
			name: "正在播放：Hustle and Bustle of Ormos 喧繁之港"
		},
		{
			src: "music/genshin/HOYO-MiX - Maidens of Sanctity 花与树的女儿们.ogg",
			name: "正在播放：Maidens of Sanctity 花与树的女儿们"
		},
		{
			src: "music/genshin/HOYO-MiX - 安逸的静水 Ann's Quiescent Residence.ogg",
			name: "正在播放：安逸的静水 <br>Ann's Quiescent Residence"
		},
		{
			src: "music/genshin/HOYO-MiX - 春尽水如天 Into the Yonder and Water.ogg",
			name: "正在播放：春尽水如天 <br>Into the Yonder and Water"
		},
		{
			src: "music/genshin/HOYO-MiX - 飞鼠进行曲 The Parade of Flying Squirrels.ogg",
			name: "正在播放：飞鼠进行曲 <br>The Parade of Flying Squirrels"
		},
		{
			src: "music/genshin/HOYO-MiX - 焚燔的欢歌 Jubilation of Calcine.ogg",
			name: "正在播放：焚燔的欢歌 Jubilation of Calcine"
		},
		{
			src: "music/genshin/HOYO-MiX - 枫丹 Fontaine.ogg",
			name: "正在播放：枫丹 Fontaine"
		},
		{
			src: "music/genshin/HOYO-MiX - 华灯星聚 Myriad of Lights.ogg",
			name: "正在播放：华灯星聚 Myriad of Lights"
		},
		{
			src: "music/genshin/HOYO-MiX - 幻写游音 Whistles of Monetoo.ogg",
			name: "正在播放：幻写游音 Whistles of Monetoo"
		},
		{
			src: "music/genshin/HOYO-MiX - 静夜的轻语 Silent Voices of the Night.ogg",
			name: "正在播放：静夜的轻语 <br>Silent Voices of the Night"
		},
		{
			src: "music/genshin/HOYO-MiX - 流光过隙 Passage of an Era.ogg",
			name: "正在播放：流光过隙 Passage of an Era"
		},
		{
			src: "music/genshin/HOYO-MiX - 轻涟 La vaguelette.ogg",
			name: "正在播放：轻涟 La vaguelette.ogg"
		},
		{
			src: "music/genshin/HOYO-MiX - 轻雨何故落 Pluie sur la ville.ogg",
			name: "正在播放：轻雨何故落 Pluie sur la ville"
		},
		{
			src: "music/genshin/HOYO-MiX - 清润玉响 A Mild Tale Untold.ogg",
			name: "正在播放：清润玉响 A Mild Tale Untold"
		},
		{
			src: "music/genshin/HOYO-MiX - 柔灯轻漾时 Lumidouce's Repose.ogg",
			name: "正在播放：柔灯轻漾时 Lumidouce's Repose"
		},
		{
			src: "music/genshin/HOYO-MiX - 永不落幕的盛典 Le spectacle doit continuer.ogg",
			name: "正在播放：永不落幕的盛典 <br>Le spectacle doit continuer"
		},
		{
			src: "music/genshin/HOYO-MiX - 玉磬漻漻 Jade Chimes.ogg",
			name: "正在播放：玉磬漻漻 Jade Chimes.ogg"
		},
		{
			src: "music/genshin/陈致逸 _ HOYO-MiX - Liyue 璃月.ogg",
			name: "正在播放：Liyue 璃月"
		},
		{
			src: "music/genshin/陈致逸 _ HOYO-MiX - Through the Eyes of a Dragon 创龙点睛.ogg",
			name: "正在播放：Through the Eyes of a Dragon 创龙点睛"
		},
		{
			src: "music/genshin/陈致逸 _ HOYO-MiX - Treasury From the Northland 北国的宝库.ogg",
			name: "正在播放：Treasury From the Northland 北国的宝库"
		}
	],
	starrail: [{
			src: "music/starrail/HOYO-MiX - 太空漫步 Space Walk.ogg",
			name: "正在播放：太空漫步 Space Walk"
		},
		{
			src: "music/starrail/HOYO-MiX - 星海浮沉录 A Star Is Born.ogg",
			name: "正在播放：星海浮沉录 A Star Is Born"
		},
		{
			src: "music/starrail/HOYO-MiX - 即兴演出 fReeStyLE.ogg",
			name: "正在播放：即兴演出 fReeStyLE"
		},
		{
			src: "music/starrail/HOYO-MiX - 金手指 The Golden Touch.ogg",
			name: "正在播放：金手指 The Golden Touch"
		},
		{
			src: "music/starrail/HOYO-MiX - 美梦多彩 Color Your Dreams.ogg",
			name: "正在播放：美梦多彩 Color Your Dreams"
		},
		{
			src: "music/starrail/HOYO-MiX - 你的颜色.ogg",
			name: "正在播放：你的颜色"
		},
		{
			src: "music/starrail/HOYO-MiX - 宁入地狱，而非虚无 Hell Is Preferable to Nihility.ogg",
			name: "正在播放：宁入地狱，而非虚无 <br>Hell Is Preferable to Nihility"
		},
		{
			src: "music/starrail/HOYO-MiX - 牛仔很忙 Cowboy's Got Business.ogg",
			name: "正在播放：牛仔很忙 Cowboy's Got Business"
		},
		{
			src: "music/starrail/HOYO-MiX - 失眠症 Dance in a Deep Dream.ogg",
			name: "正在播放：失眠症 Dance in a Deep Dream"
		},
		{
			src: "music/starrail/HOYO-MiX - 天地为枰 Heaven and Earth as a Chessboard.ogg",
			name: "正在播放：天地为枰 <br>Heaven and Earth as a Chessboard"
		},
		{
			src: "music/starrail/HOYO-MiX - 戏剧性反讽 A Dramatic Irony.ogg",
			name: "正在播放：戏剧性反讽 A Dramatic Irony"
		},
		{
			src: "music/starrail/HOYO-MiX - 演出开始前 Before the Show Starts.ogg",
			name: "正在播放：演出开始前 Before the Show Starts"
		},
		{
			src: "music/starrail/HOYO-MiX - 一夜无事 Uneventful Night.ogg",
			name: "正在播放：一夜无事 Uneventful Night"
		},
		{
			src: "music/starrail/HOYO-MiX - 有点意思 Got a Date.ogg",
			name: "正在播放：有点意思 Got a Date"
		},
		{
			src: "music/starrail/HOYO-MiX _ Jonathan Steingard - 野火 Wildfire.ogg",
			name: "正在播放：野火 Wildfire"
		},
		{
			src: "music/starrail/HOYO-MiX _ Reol - 不乱不破.ogg",
			name: "正在播放：不乱不破"
		},
		{
			src: "music/starrail/知更鸟 _ HOYO-MiX _ Chevy - 若我不曾见过太阳.ogg",
			name: "正在播放：若我不曾见过太阳"
		},
		{
			src: "music/starrail/知更鸟 _ HOYO-MiX _ Chevy - 使一颗心免于哀伤.ogg",
			name: "正在播放：使一颗心免于哀伤"
		}
	],
	zzz: [{
			src: "music/zzz/三Z-STUDIO _ HOYO-MiX - 60%的日常.ogg",
			name: "正在播放：60%的日常"
		},
		{
			src: "music/zzz/三Z-STUDIO _ HOYO-MiX - 60%的日常·悠闲.ogg",
			name: "正在播放：60%的日常·悠闲"
		},
		{
			src: "music/zzz/阿兰 _ 三Z-STUDIO _ HOYO-MiX - 一颗方糖悬滞的时间.ogg",
			name: "正在播放：一颗方糖悬滞的时间"
		},
		{
			src: "music/zzz/三Z-STUDIO _ HOYO-MiX - 60%的日常·自由.ogg",
			name: "正在播放：60%的日常·自由"
		},
		{
			src: "music/zzz/三Z-STUDIO _ HOYO-MiX - 60%的遐想·静谧.ogg",
			name: "正在播放：60%的遐想·静谧"
		},
		{
			src: "music/zzz/三Z-STUDIO _ HOYO-MiX - 60%的遐想·热情.ogg",
			name: "正在播放：60%的遐想·热情"
		},
		{
			src: "music/zzz/三Z-STUDIO _ HOYO-MiX - Golden Sign _F.ogg",
			name: "正在播放：Golden Sign _F"
		},
		{
			src: "music/zzz/三Z-STUDIO _ HOYO-MiX - 当群星交汇（Feat_耀嘉音）.ogg",
			name: "正在播放：当群星交汇"
		},
		{
			src: "music/zzz/三Z-STUDIO _ HOYO-MiX - 火狱骑行.ogg",
			name: "正在播放：火狱骑行"
		},
		{
			src: "music/zzz/三Z-STUDIO _ HOYO-MiX - 开盒有惊__.ogg",
			name: "正在播放：开盒有惊__"
		},
		{
			src: "music/zzz/三Z-STUDIO _ HOYO-MiX - 时光正在回退.ogg",
			name: "正在播放：时光正在回退"
		},
		{
			src: "music/zzz/三Z-STUDIO _ HOYO-MiX - 争流口岸.ogg",
			name: "正在播放：争流口岸"
		}
	],
	default: [{
			src: "music/default/HOYO-MiX - 曲水如鳞 Her Silhouette.ogg",
			name: "正在播放：曲水如鳞 Her Silhouette"
		},
		{
			src: "music/default/HOYO-MiX - 小小的新朋友 Introduction to a Little Friend.ogg",
			name: "正在播放：小小的新朋友 <br>Introduction to a Little Friend"
		},
		{
			src: "music/default/HOYO-MiX - 熏沐的香氛 Misty Redolence.ogg",
			name: "正在播放：熏沐的香氛 Misty Redolence"
		}
	]

};

// 默认曲库是default
const defaultList = "default";
let currentList = [...musicLists[defaultList]];
let fallbackToDefault = true; // 是否回退默认曲库
let isPersistentMode = false; // 是否持续播放指定曲库

const player = document.getElementById("musicPlayer");
const currentTrackNameSpan = document.getElementById("currentTrackName"); // 获取显示曲名的元素

// 淡出函数
function fadeOutAudio(audio, callback) {
	let fadeInterval = setInterval(() => {
		if (audio.volume > 0.05) {
			audio.volume -= 0.05;
		} else {
			audio.volume = 0;
			clearInterval(fadeInterval);
			if (callback) callback();
		}
	}, 50);
}

// 淡入函数
function fadeInAudio(audio) {
	audio.volume = 0;
	let fadeInterval = setInterval(() => {
		if (audio.volume < 0.95) {
			audio.volume += 0.05;
		} else {
			audio.volume = 1;
			clearInterval(fadeInterval);
		}
	}, 50);
}

// 播放随机曲目
function playRandom() {
	if (!currentList.length) {
		currentTrackNameSpan.innerHTML = "无可用歌曲";
		return;
	}

	fadeOutAudio(player, () => {
		const index = Math.floor(Math.random() * currentList.length);
		const selected = currentList[index];
		player.src = selected.src;
		currentTrackNameSpan.innerHTML = selected.name;

		player.play().then(() => {
			fadeInAudio(player);
		}).catch(err => {
			console.error("播放失败：", err);
			currentTrackNameSpan.textContent = "播放失败 (浏览器或文件问题)";
		});
	});
}

// 播放结束后逻辑
player.addEventListener("ended", () => {
	if (fallbackToDefault && !isPersistentMode) {
		currentList = [...musicLists[defaultList]];
	}
	playRandom();
});

// 播放一首后回默认曲库的按钮
window.playOnceFrom = function(key) {
	if (musicLists[key]) {
		currentList = [...musicLists[key]];
		fallbackToDefault = true;
		isPersistentMode = false;
		playRandom();
	}
};

// 持续播放某曲库的按钮
window.playLoopFrom = function(key) {
	if (musicLists[key]) {
		currentList = [...musicLists[key]];
		fallbackToDefault = false;
		isPersistentMode = true;
		playRandom();
	}
};

// 静音按钮
document.getElementById("muteButton").addEventListener("click", () => {
	player.muted = !player.muted;
	document.getElementById("muteButton").textContent = player.muted ? "🔇" : "🔈";
});

//专辑滚动条
const albumScroll = document.getElementById("album-scroll");

// 克隆内容
const clone = albumScroll.cloneNode(true);
while (clone.firstChild) {
	albumScroll.appendChild(clone.firstChild);
}

// 预绑定图片 hover 放大事件（只绑定一次）
albumScroll.querySelectorAll("img").forEach(img => {
	img.addEventListener("mouseenter", () => {
		img.style.transform = "scale(1.2)";
	});
	img.addEventListener("mouseleave", () => {
		img.style.transform = "scale(1)";
	});
});

let scrollInterval;

//滚动逻辑
function startScrolling() {
	scrollInterval = setInterval(() => {
		albumScroll.scrollTop += 1;
		if (albumScroll.scrollTop >= albumScroll.scrollHeight / 2) {
			albumScroll.scrollTop = 0;
		}
	}, 20);
}

function stopScrolling() {
	clearInterval(scrollInterval);
}

//悬停控制滚动
albumScroll.addEventListener("mouseenter", stopScrolling);
albumScroll.addEventListener("mouseleave", startScrolling);

//页面加载后启动滚动
window.addEventListener("load", startScrolling);
