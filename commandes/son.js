const {
  zokou
} = require("../framework/zokou");
const yts = require("yt-search");
zokou({
  'nomCom': "play1",
  'categorie': "Download",
  'reaction': '🎶'
}, async (_0x3bb19c, _0x1b59c4, _0x1ac9b2) => {
  const {
    ms: _0x57f480,
    repondre: _0x1ae903,
    arg: _0x546fcc
  } = _0x1ac9b2;
  if (!_0x546fcc[0]) {
    _0x1ae903("Please insert a song name.");
    return;
  }
  try {
    let _0x5cd887 = _0x546fcc.join(" ");
    let _0x322f75 = [];
    const _0x1b000a = await yts(_0x5cd887);
    _0x322f75 = _0x1b000a.videos;
    if (_0x322f75 && _0x322f75.length > 0) {
      const _0x165324 = _0x322f75[0].url;
      const _0xd95cfd = await fetch("https://api.dreaded.site/api/ytdl/audio?url=$" + encodeURIComponent(_0x165324) + "&apikey=" + "gifted");
      const _0x257cbf = await _0xd95cfd.json();
      if (_0x257cbf.status === 200 && _0x257cbf.success) {
        const _0x53c40a = _0x257cbf.result.download_url;
        const _0xd636ce = {
          'image': {
            'url': _0x322f75[0].thumbnail
          },
          'caption': "♻️𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 ♻️\n\n📌  *Title:* " + _0x322f75[0].title + "\n🔍 *Quality:* mp3 (320kbps)\n⏳ *Duration:* " + _0x322f75[0].timestamp + "\n👁️ *Viewers:* " + _0x322f75[0].views + "\n🎭 *Uploaded:* " + _0x322f75[0].ago + "\n⏳ *Artist:* " + _0x322f75[0].author.name + "\n\n⦿ *Direct YtLink:* " + _0x165324 + "\n\nᴛᴀᴘ ᴏɴ ᴛʜᴇ ʟɪɴᴋ ʙᴇʟᴏᴡ ᴛᴏ ғᴏʟʟᴏᴡ ᴏᴜʀ ᴄʜᴀɴɴᴇʟ\n> https://shorturl.at/q8ZuS \n➠ᴍᴀᴅᴇ ʙʏ ɴᴊᴀʙᴜʟᴏ ᴊʙ2025"
        };
        await _0x1b59c4.sendMessage(_0x3bb19c, _0xd636ce, {
          'quoted': _0x57f480
        });
        await _0x1b59c4.sendMessage(_0x3bb19c, {
          'audio': {
            'url': _0x53c40a
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x57f480
        });
        _0x1ae903("*enjoy music is life my friend*...");
      } else {
        _0x1ae903("Failed to download audio. Please try again later.");
      }
    } else {
      _0x1ae903("No audio found.");
    }
  } catch (_0x1eb46b) {
    console.error("Error from API:", _0x1eb46b);
    _0x1ae903("An error occurred while searching or downloading the audio." + _0x1eb46b);
  }
});
zokou({
  'nomCom': "video1",
  'categorie': "Download",
  'reaction': '🎥'
}, async (_0x1865cc, _0x52cb5d, _0x3ecbfa) => {
  const {
    ms: _0x4b29db,
    repondre: _0x53a005,
    arg: _0x256e4c
  } = _0x3ecbfa;
  if (!_0x256e4c[0]) {
    _0x53a005("Please insert a song/video name.");
    return;
  }
  try {
    let _0x1a81ab = _0x256e4c.join(" ");
    let _0x336257 = [];
    const _0x484e5e = await yts(_0x1a81ab);
    _0x336257 = _0x484e5e.videos;
    if (_0x336257 && _0x336257.length > 0) {
      const _0x3cf1db = _0x336257[0].url;
      const _0x3650ad = await fetch("https://apis.davidcyriltech.my.id/download/ytmp4?url=" + encodeURIComponent(_0x3cf1db) + "&apikey=" + "gifted");
      const _0x161135 = await _0x3650ad.json();
      if (_0x161135.status === 200 && _0x161135.success) {
        const _0xbcbf5f = _0x161135.result.download_url;
        const _0x426211 = {
          'image': {
            'url': _0x336257[0].thumbnail
          },
          'caption': "♻️𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 ♻️\n\n📌  *Title:* " + _0x336257[0].title + "\n🔍 *Quality:* 720p-HD\n⏳ *Duration:* " + _0x336257[0].timestamp + "\n👁️ *Viewers:* " + _0x336257[0].views + "\n🎭 *Uploaded:* " + _0x336257[0].ago + "\n⏳ *Artist:* " + _0x336257[0].author.name + "\n\n⦿ *Direct YtLink:* " + _0x3cf1db + "\n\nᴛᴀᴘ ᴏɴ ᴛʜᴇ ʟɪɴᴋ ʙᴇʟᴏᴡ ᴛᴏ ғᴏʟʟᴏᴡ ᴏᴜʀ ᴄʜᴀɴɴᴇʟ\n> https://shorturl.at/q8ZuS\n➠ᴍᴀᴅᴇ ʙʏ ɴᴊᴀʙᴜʟᴏ ᴊʙ2025"
        };
        await _0x52cb5d.sendMessage(_0x1865cc, _0x426211, {
          'quoted': _0x4b29db
        });
        await _0x52cb5d.sendMessage(_0x1865cc, {
          'video': {
            'url': _0xbcbf5f
          },
          'caption': "𝚊𝚕𝚠𝚊𝚢𝚜•••𝚘𝚗𝚕𝚒𝚗𝚎!",
          'mimetype': "video/mp4"
        }, {
          'quoted': _0x4b29db
        });
        _0x53a005("*enjoy music is life my friend*...");
      } else {
        _0x53a005("Failed to download the video. Please try again later.");
      }
    } else {
      _0x53a005("No videos found.");
    }
  } catch (_0x4ccb17) {
    console.error("Error from API:", _0x4ccb17);
    _0x53a005("An error occurred while searching or downloading the video." + _0x4ccb17);
  }
});
          
