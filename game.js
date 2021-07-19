var locale = {
  lang: null,
  getLocale: navigator.mozL10n.get
};

Phaser.Plugin.Navigator = function (parent, game) {
  Phaser.Plugin.call(this, parent, game);
};
Phaser.Plugin.Navigator.prototype = Object.create(Phaser.Plugin.prototype);
Phaser.Plugin.Navigator.prototype.constructor = Phaser.Plugin.SamplePlugin;

Phaser.Plugin.Navigator.prototype.stack = [];

Phaser.Plugin.Navigator.prototype.init = function () {
  game.softkey = game.plugins.add(Phaser.Plugin.Softkey);
};

Phaser.Plugin.Navigator.prototype.register = function (arg) {
  this.stack.push(Object.assign({}, game.softkey.getLastConfig()));

  this.group = game.softkey.config({ style: arg.style, label: arg.label });
  game.softkey.listener(arg.action);
};

Phaser.Plugin.Navigator.prototype.setLastConfig = function () {
  var temp = this.stack.pop();
  this.group = game.softkey.config({ style: temp.style, label: temp.label });
  game.softkey.listener(temp.action);
};

Phaser.Plugin.Navigator.prototype.stackPopAll = function () {
  this.stack = [];
};

Phaser.Plugin.Navigator.prototype.destroy = function () {
  this.group.kill();
};

Phaser.Plugin.Softkey = function (parent, game) {
  Phaser.Plugin.call(this, parent, game);
};
Phaser.Plugin.Softkey.prototype = Object.create(Phaser.Plugin.prototype);
Phaser.Plugin.Softkey.prototype.constructor = Phaser.Plugin.SamplePlugin;

Phaser.Plugin.Softkey.prototype.skGroup = null;
Phaser.Plugin.Softkey.prototype.lastConfig = {};
Phaser.Plugin.Softkey.prototype.defaultHandler = {};

Phaser.Plugin.Softkey.prototype.listener = function (arg) {
  self = this;

  this.lastConfig.action = arg;

  window.onkeydown = function (e) {
    self._keyPress(e, arg);
  };
};

Phaser.Plugin.Softkey.prototype.config = function (arg) {
  if (!arg.label) {
    return;
  }

  if (!arg.style) {
    arg.style = game.custom.fontSKStyle;
  }

  if(this.skGroup){
    this.skGroup.removeAll();
  }

  this.skGroup = game.add.group();
  this.skGroup.fixedToCamera = true;
  this.skGroup.cameraOffset.setTo(-game.camera.x, -game.camera.y);

  this.lastConfig.label = arg.label;
  this.lastConfig.style = arg.style;

  this.centerX = game.camera.x + game.camera.width / 2;
  this.portionLenght = Math.round( (game.camera.width * 0.90)/3 );

  if (undefined !== arg.label.lsk) {
    this.lsk = game.add.text(game.camera.x + 10, game.camera.y + (game.camera.height - 12), arg.label.lsk, arg.style);
    this.lsk.x = game.camera.x + 10 + this.lsk.width / 2;
    this.lsk.anchor.setTo(0.5);
    this.skGroup.add(this.lsk);
    if (this.portionLenght < this.lsk.width) {
      ellipsizeText(this.lsk, this.portionLenght, 1);
    }
  }
  if (undefined !== arg.label.csk) {
    this.csk = game.add.text(this.centerX, game.camera.y + (game.camera.height - 12), arg.label.csk, arg.style);
    this.csk.anchor.setTo(0.5);
    this.skGroup.add(this.csk);
    if (this.portionLenght < this.csk.width) {
      ellipsizeText(this.csk, this.portionLenght);
    }
  }

  if (undefined !== arg.label.rsk) {
    this.rsk = game.add.text(190, game.camera.y + (game.camera.height - 12), arg.label.rsk, arg.style);
    this.rsk.x = game.camera.x + (game.camera.width - 10) - this.rsk.width / 2;
    this.rsk.anchor.setTo(0.5);
    this.skGroup.add(this.rsk);
    if (this.portionLenght < this.rsk.width) {
      if(undefined !== arg.label.csk) {
        ellipsizeText(this.rsk, this.portionLenght, 3);
      }
    }
  }

  return this.skGroup;
};

Phaser.Plugin.Softkey.prototype.getLastConfig = function () {
  return this.lastConfig;
};

function ellipsizeText(softkey, portionLenght, number) {
  var labelLenght = softkey.text.length;

  this.fixLenght = Math.floor((portionLenght * labelLenght) / softkey.width) -2;

  this.newText = softkey.text.substr(0, this.fixLenght) + '...';

  softkey.text = this.newText;

  if(1 === number) {
    softkey.x = game.camera.x + 10 + softkey.width / 2;
  }

  if(3 === number) {
    softkey.x = game.camera.x + (game.camera.width - 10) - softkey.width / 2;
  }
}

Phaser.Plugin.Softkey.prototype._keyPress = function (e, arg) {
  var keyHandler = null;
  var key = this._debug(e);
  switch (key) {
    case 'SoftLeft':
      if(arg.softLeft){
        keyHandler = arg.softLeft;
        e.preventDefault();
      }
      break;
    case 'Enter':
      if(arg.enter){
        keyHandler = arg.enter;
        e.preventDefault();
      }
      break;
    case 'MicrophoneToggle':
      e.preventDefault();
      break;
    case 'SoftRight':
      if(arg.softRight){
        keyHandler = arg.softRight;
        e.preventDefault();
      }
      break;
    case 'Backspace':
      if(arg.backspace){
        keyHandler = function () {
          e.preventDefault();
          e.stopImmediatePropagation();
          arg.backspace();
        }
      }
      break;
    case 'EndCall':
      if(arg.endCall){
        keyHandler = function () {
          e.preventDefault();
          e.stopImmediatePropagation();
          arg.endCall();
        }
      }
      break;
    default:
      if(arg[key]) {
        keyHandler = arg[key];
      }
      break;
  }

  if(!keyHandler)
    keyHandler = this.defaultHandler[key];

  keyHandler && keyHandler();
};

Phaser.Plugin.Softkey.prototype._debug = function (evt) {
  if (game.custom && game.custom.debug) {
    console.warn("[Phaser.Plugin.Softkey] in debug mode!", evt.key);
    if (evt.shiftKey) {
      switch (evt.key) {
        case "ArrowLeft":
          return "SoftLeft";
        case "ArrowRight":
          return "SoftRight";
        /* istanbul ignore next */
        default:
          break;
      }
    }
  }
  return evt.key;
};

var score = {
  score: 0,
  softkey: null,
  locale: null,
  preload: function () {

  },
  create: function () {
    game.add.tileSprite(0, 0, 240, 320, 'bg');
    game.add.sprite(game.world.centerX, 160, 'pause-board').anchor.set(0.5);
    this.renderText();
    this.bind();
  },
  bind: function () {
    game.navigator.register({
      label: {
        lsk: locale.getLocale('home')
      },
      action: {
        softLeft: function () {
          game.state.start('menu');
        },
        backspace: function () {
          game.state.start('menu');
        }
      }
    });
    game.navigator.group.children.forEach(function (item) {
      item.setShadow(2, 2, 'rgba(0, 0, 0, 0.3)', 0)
    });
  },
  renderText: function () {
    var texto = game.add.text(game.world.centerX, 170, this.loadScore(),
      { font: '70px Open Sans bold', fontWeight: '800', fill: '#fff' });
    texto.anchor.set(0.5);
    texto.setShadow(3, 3, 'rgba(0, 0, 0, 0.30)', 5);
    // game.add.text(10, 298, locale.getLocale('home'), { font: '16px Open Sans', fill: '#fff' });

    //title score
    var scoreText = game.add.text(game.world.centerX, 120,
      locale.getLocale('score').toUpperCase(),
      { font: '20px Riffic Bold', fill: '#fff' });
    scoreText.anchor.set(0.5);
    scoreText.setShadow(3, 3, 'rgba(0, 0, 0, 0.30)', 5);

  },
  loadScore: function () {
    var score = localStorage.getItem('birdy-score');
    if (null !== score) {
      return score
    } else {
      return 0
    }
  },
  formatScore: function (value) {
    switch (value.toString().length) {
      case 0:
        return '0000';
      case 1:
        return '000' + value;
      case 2:
        return '00' + value;
      case 3:
        return '0' + value;
      default:
        return value;
    }
  },
};

var options = {
  focus: null,
  focus2: null,
  soundOn: null,
  soundOff: null,
  vibrationOn: null,
  vibrationOff: null,
  preload: function () {

  },
  create: function () {
    game.add.sprite(0, 0, 'bg');
    game.add.sprite(17, 82, 'options-board');
    this.index = 0;
    this.focus = game.add.sprite(17, 157, 'focus');
    this.focus.visible = true;
    this.focus2 = game.add.sprite(17, 196, 'focus');
    this.focus2.visible = false;

    this.soundOn = game.add.sprite(168, 169, 'on');
    this.soundOn.visible = false;
    this.soundOff = game.add.sprite(168, 169, 'off');
    this.soundOff.visible = false;

    this.vibrationOn = game.add.sprite(168, 206, 'on');
    this.vibrationOn.visible = false;
    this.vibrationOff = game.add.sprite(168, 206, 'off');
    this.vibrationOff.visible = false;

    this.renderText();
    this.bind();
    this.loadSound()
    this.loadVibration();
  },
  bind: function () {
    var self = this;
    game.navigator.register({
      label: {
        lsk: locale.getLocale('home'),
        rsk: locale.getLocale('about'),
      },
      action: {
        softLeft: function () {
          game.state.start('menu');
        },
        enter: function () {
          self.select();
        },
        softRight: function () {
          game.state.start('about');
        },
        ArrowUp: function () {
          self.up();
        },
        ArrowDown: function () {
          self.down();
        },
        backspace: function () {
          game.state.start('menu');
        }
      }
    });
    game.navigator.group.children.forEach(function (item) {
      item.setShadow(2, 2, 'rgba(0, 0, 0, 0.3)', 0)
    });
  },
  renderText: function () {
    var style = game.custom.fontStyle;
    style.fontSize = "24px";
    game.add.text(game.world.centerX, 120, locale.getLocale('options').toUpperCase(), { font: '20px Riffic Bold', fill: '#fff' }).setShadow(2, 2, 'rgba(0,0,0,0.3)', 3).anchor.setTo(0.5);
    game.add.text(43, 167, locale.getLocale('sound'), { font: '20px Open Sans', 'fontWeight': '600', fill: '#fff' }).setShadow(2, 2, 'rgba(0,0,0,0.3)', 3);
    game.add.text(43, 203, locale.getLocale('vibration'), { font: '20px Open Sans', 'fontWeight': '600', fill: '#fff' }).setShadow(2, 2, 'rgba(0,0,0,0.3)', 3);
  },
  select: function () {
    switch (this.index) {
      case 0:
        this.saveData('sound', (!this.soundOn.visible));
        this.loadSound();
        break;
      case 1:
        this.saveData('vibration', (!this.vibrationOn.visible));
        this.loadVibration();
        break;
    }
  },
  up: function () {
    if (this.index === 1) {
      --this.index;
      this.focus.visible = true;
      this.focus2.visible = false;
    }
  },
  down: function () {
    if (this.index < 1) {
      ++this.index;
      this.focus.visible = false;
      this.focus2.visible = true;
    }
  },
  saveData: function (key, value) {
    localStorage.setItem(key, value);
  },
  loadData: function (key) {
    var value = JSON.parse(localStorage.getItem(key));

    if (null === value || undefined === value) {
      this.saveData(key, true);
      return true;
    }
    return value;
  },
  loadSound: function () {
    var sound = this.loadData('sound');
    this.soundOn.visible = sound;
    this.soundOff.visible = !sound;
  },
  loadVibration: function () {
    var vibration = this.loadData('vibration');
    this.vibrationOn.visible = vibration;
    this.vibrationOff.visible = !vibration;
  }
};

var about = {
  softkey: null,
  locale: null,
  preload: function () {

  },
  create: function () {
    game.add.sprite(0, 0, 'bg');
    game.add.sprite(17, 87, 'about-board');
    game.add.sprite(67, 195, 'kaios');

    this.renderText();
    this.bind();
  },
  bind: function () {
    game.navigator.register({
      label: {
        lsk: locale.getLocale('home')
      },
      action: {
        softLeft: function () {
          game.state.start('menu');
        },
        backspace: function () {
          game.state.start('options');
        }
      }
    });
    game.navigator.group.children.forEach(function (item) {
      item.setShadow(2, 2, 'rgba(0, 0, 0, 0.3)', 0)
    });
  },
  renderText: function () {

    var about = game.add.text(game.world.centerX, 115,
      locale.getLocale('about').toUpperCase(), { font: '20px Riffic Bold', fill: '#fff', align: "center" }).setShadow(2, 2, 'rgba(0,0,0,0.3)', 3);
    about.anchor.setTo(0.5);

    var text = game.add.text(game.world.centerX, 160,
      locale.getLocale('aboutText'),
      { font: '16px Open Sans', fill: '#fff', align: "center" }).setShadow(2, 2, 'rgba(0,0,0,0.3)', 3);

    text.anchor.setTo(0.5, 0.5);
    text.wordWrap = true;
    text.wordWrapWidth = 180;
    text.lineSpacing = -5;
  }
};

var game_start = {
  currentPosY: 0,
  highScore: 0,
  gameState: {
    INGAME: "INGAME",
    STANDBY: "STANDBY"
  },
  preload: function () {
    // game.load.audio('jump', 'assets/jump.wav');
  },
  create: function () {
    game.forceSingleUpdate = false;

    this.background = game.add.tileSprite(0, 0, 447, 320, 'background');
    this.currentScore = 0;
    this.highScore = localStorage.getItem('birdy-score');
    this.pipes = game.add.group();
    this.currentState = this.gameState.STANDBY;

    //Initializing jump fx
    game.jumpSound = game.add.audio('jump');
    this.btBlock = false;

    this.renderText();
    this.bind();

    //Game init config
    game.physics.startSystem(Phaser.Physics.ARCADE);
    this.bird = game.add.sprite(50, 150, 'bird');
    game.physics.arcade.enable(this.bird);

    this.bird.body.width = 10;
    game.physics.setBoundsToWorld();

    this.bird.scale.setTo(0.6, 0.6);
    this.bird.body.gravity.y = 500;
    this.bird.body.setCircle(20, 20);
    this.bird.animations.add('jump', [0, 1, 3, 4, 0], 10);
    this.bird.animations.add('hit', [6], 10);

    this.createObstacle();

    this.pipes.setAll("body.velocity.x", -120);

    this.helpText = game.add.text(game.world.centerX, 200, locale.getLocale('helpText'), {
      font: '16px Open Sans',
      fontWeight: '800',
      fill: '#FFF',
      strokeThickness: 1,
      stroke: '#FFFFF',
      align: 'center'
    })
    this.helpText.anchor.set(0.5);
    this.helpText.wordWrap = true;
    this.helpText.wordWrapWidth = 220;
    this.helpText.lineSpacing = -5;
    game.paused = true;
  },
  createObstacle: function (x, y) {
    var pipe = game.add.sprite(400, -128, 'obstacle-up');
    this.pipeDown = game.add.sprite(pipe.x, 198, 'obstacle-down');
    pipe.checkWorldBounds = true;
    this.pipeDown.checkWorldBounds = true;
    game.physics.arcade.enable([pipe, this.pipeDown]);

    this.pipes.addMultiple([pipe, this.pipeDown]);

    pipe.events.onOutOfBounds.add(this.obstacleOut, this);

  },

  obstacleOut: function (pipeUp) {
    if (pipeUp.body.position.x < 0) {
      pipeUp.position.x = game.width;
      var indexY = game.rnd.integerInRange(1, 6);
      pipeUp.position.y = -(indexY * 32);
      this.pipeDown.x = pipeUp.position.x;
      this.pipeDown.y = (9.9 - indexY) * 32;
    }
  },

  jump: function () {
    if (this.gameState.STANDBY === this.currentState) {
      this.switchState(this.gameState.INGAME);
      this.helpText.destroy();
      game.paused = false;
    }

    if (this.bird.alive == false)
      return;

    if (Render.Options.loadData('sound')) {
      game.jumpSound.play();
    }

    this.bird.animations.play('jump');
    this.bird.body.velocity.y = -240;
    var animation = game.add.tween(this.bird);

    animation.to({ angle: -20 }, 100);
    animation.start();

    //stores current position after jumping
    this.currentPosY = this.bird.y;
  },

  stopPipes: function () {
    this.pipes.setAll('body.velocity.x', 0);
  },

  hitPipe: function () {
    if (this.bird.alive == false)
      return;
    this.bird.scale.setTo(1);
    this.bird.animations.play('hit');
    // check if vibration is enabled
    if (Render.Options.loadData('vibration')) {
      navigator.vibrate(300);
    }

    this.bird.alive = false;

    this.stopPipes();
  },

  update: function () {
    if (this.bird.y > 320) {
      this.stopPipes();
      this.gameOver();
    }
    //avoids the bird pass through the margin top
    if (this.bird.y <= 20) {
      this.bird.body.velocity.y = 40;
    }

    if (this.bird.y < this.currentPosY) {
      this.bird.animations.play('fall');
    }

    //check if the bird hits the pipes
    game.physics.arcade.overlap(this.bird, this.pipes, this.hitPipe, null, this);

    if (this.bird.alive) {
      this.background.tilePosition.x -= 0.4;

      if (this.pipes.children[0].position.x == 48) {
        this.currentScore++;
        this.scoreText.text = this.currentScore;
      }
    }
    if (this.bird.body.velocity.y > 240) {
      this.bird.body.velocity.y = 300;
    }

    if (this.bird.angle < 20) {
      this.bird.angle += 1;
    }

  },

  restartGame: function () {
    game.state.start('game');
  },

  render: function () {
    // game.debug.body(this.rede);
    // game.debug.spriteInfo(this.rede, 32, 32);
  },

  saveScore: function () {
    if (this.currentScore > this.highScore) {
      this.highScore = this.currentScore;
      localStorage.setItem('birdy-score', this.highScore);
    }
    return;
  },

  ellipsizeText: function (text, caracter) {
    if (text.length > caracter) {
      return text.substring(0, caracter) + '..';
    } else {
      return text;
    }
  },

  gameOver: function () {
    if (!Render.YouLose.isLose) {
      this.saveScore();
      this.bird.kill();
      Render.YouLose.show(this.currentScore);
    }
  },

  bind: function () {
    var self = this;
    game.navigator.register({
      label: {
        lsk: self.currentState === self.gameState.INGAME ? locale.getLocale('restart') : "",
        rsk: locale.getLocale('options')
      },
      action: {
        softLeft: function () {
          if (self.currentState === self.gameState.INGAME) {
            game.paused = false;
            game.ads.nextState = 'game';
            game.state.start('ads', true, false, 'restart');
          }
        },
        enter: function () {
          self.jump();
        },
        softRight: function () {
          if (self.btBlock) {
            return;
          }
          self.optionPause();
        },
        5: function () {
          self.jump();
        },
        0: function () {
          self.optionPause();
        },
        backspace: function () {
          Render.Confirm.show();
        },
        endCall: function () {
          Render.Confirm.show();
        }
      }
    });
    game.navigator.group.children.forEach(function (item) {
      item.setShadow(3, 3, 'rgba(0,0,0,0.3)', 5);
    });
  },
  optionPause: function () {
    if (!Render.Confirm.isOpen && !Render.Options.isPaused && !Render.YouLose.isLose)
      Render.Options.show();
  },
  switchState: function (nextState) {
    this.currentState = nextState;
    this.bind();
  },
  renderText: function () {
    this.scoreText = game.add.text(game.world.centerX, 38, 0, {
      font: '24px Open Sans',
      fontWeight: '800',
      fill: '#ffffff',
      stroke: '#000',
      strokeThickness: '2'
    });
    this.scoreText.anchor.set(0.5);
  },
};

document.addEventListener('visibilitychange', function (e) {
  if (document.hidden) {
    if ('game' === game.state.current) {
      game_start.optionPause();
    }
  }
});

var menu = {
  softkey: null,
  locale: null,
  preload: function () {
    console.log('.............................menu scene.... preload');
    // Temporary stop the system music
    var sound = this.loadSound();
    if (sound && !game.noSound.isPlaying && !game.noSound.mute) {
      game.noSound.play('', 0, 0.4, true);
    }

    game.navigator = game.plugins.add(Phaser.Plugin.Navigator);
    game.softkey.defaultHandler['1'] = function(){ navigator.volumeManager && navigator.volumeManager.requestDown() };
    game.softkey.defaultHandler['3'] = function(){ navigator.volumeManager && navigator.volumeManager.requestUp() };
  },
  create: function () {
    console.log('.............................menu scene.... create');
    game.add.tileSprite(0, 0, 240, 320, 'bg');
    this.renderText();
    this.bind();
  },
  bind: function () {
    game.navigator.register({
      label: {
        lsk: locale.getLocale('score'),
        rsk: locale.getLocale('options'),
      },
      action: {
        softLeft: function () {
          game.state.start('score');
        },
        enter: function () {
          game.state.start('game');
        },
        softRight: function () {
          game.state.start('options');
        }
      }
    });

    game.navigator.group.children.forEach( function (item) {
      item.setShadow(2,2,'rgba(0, 0, 0, 0.3)',0)
    });
  },
  renderText: function () {
    var start = game.add.text(game.world.centerX, game.world.centerY + 26, locale.getLocale('start').toUpperCase(), { font: '20px Open Sans', 'fontWeight':'800', fill: '#fff' });
    start.setShadow(2, 2, 'rgba(0, 0, 0, 0.3)');
    start.anchor.set(0.5);

    // game.add.text(game.world.centerX, 240, 'Press 5 to start', {font: '20px Bebas Neue', fill: '#fff', strokeThickness: 2}).anchor.set(0.5);
  },
  loadSound: function() {
    var value = JSON.parse(localStorage.getItem('sound'));
    if (null === value || undefined === value) {
      return true;
    }
    return value;
  }
};

var splash = {
    preload: function () {
        game.navigator = game.plugins.add(Phaser.Plugin.Navigator);
    },
    create: function () {
        game.load.onLoadComplete.addOnce(function () {
            this.decode(game, this, function() {
                game.init = true;
                game.jumpSound.volume = 0.4;
                game.ads.nextState = 'menu';
                game.state.start('ads', true, false, 'splash');
            });
        }, this);

        this.start();
    },
    decode: function (game, context, callback) {
        var sounds = [];
        game.jumpSound = game.add.audio('jump');
        game.noSound = game.add.audio('noSound');

        sounds = [
            game.jumpSound,
            game.noSound
        ];
        game.sound.setDecodedCallback(sounds, function() {
            callback();
        }, context);
    },
    loadSound: function () {
        game.load.audio('jump', ['assets/jump.wav']);
        game.load.audio('noSound', ['assets/nosound.mp3']);
    },
    start: function () {
        // Menu
        game.load.image('bg', 'assets/bg-home.png');

        // Options
        game.load.image('bg', 'assets/generic-bg.png');
        game.load.image('options-board', 'assets/board.png');
        game.load.image('on', 'assets/selector-on.png');
        game.load.image('off', 'assets/selector-off.png');
        game.load.image('focus', 'assets/focus-1.png');

        // Score
        game.load.image('bg', 'assets/generic-bg.png');
        game.load.image('pause-board', 'assets/board.png');

        // About
        game.load.image('bg', 'assets/generic-bg.png');
        game.load.image('about-board', 'assets/board.png');
        game.load.image('kaios', 'assets/kaios-logo.png');

        // Game Start
        game.load.image('logo', 'assets/birdy-logo.png');
        game.load.image('obstacle-up', 'assets/obstacle-up.png');
        game.load.image('obstacle-down', 'assets/obstacle-down.png');
        game.load.image('background', 'assets/game-scenario.png');
        game.load.image('gameOverScore', 'assets/ctn-game-over-board.png');
        game.load.image('bg-dialog', 'assets/dialog.png');
        game.load.image('bg-game-over', 'assets/bg-game-over.png');
        game.load.image('bg-options', 'assets/bg-options.png');
        game.load.image('bg-exit', 'assets/bg-exit.png');
        game.load.image('pause-board', 'assets/board.png');
        game.load.image('focus', 'assets/focus-1.png');
        game.load.image('on', 'assets/selector-on.png');
        game.load.image('off', 'assets/selector-off.png');
        game.load.spritesheet('bird', 'assets/birdy.png', 76.42, 38);

        this.loadSound();
        game.load.start();
    }
};
var ads = {
  init: function (adname) {
    this.adname = adname;
  },
  create: function () {
    game.sound.mute = true;
    var onAdFinished = function () {
      console.log('...................................debugger!!');
      console.log('enter onAdFinished!');
      console.log('game.ads.nextState');
      console.log(game.ads.nextState);
      game.sound.mute = false;
      game.state.start(game.ads.nextState);
    };
    game.ads.showAds({
      adname: this.adname,
      onAdFinished: onAdFinished
    });
    this.bind();
  },
  bind: function () {
    if (game.navigator) {
      game.navigator.register({
        label: {},
        action: {
          softLeft: function () {
          },
          enter: function () {
          },
          softRight: function () {
          },
          backspace: function () {
          },
          endCall: function () {
          }
        }
      });
    }
  }

};

function JioKaiAds(adsWrapperId) {
  this.adsWrapperId = adsWrapperId;
}

JioKaiAds.prototype.showAds = function(containerCfg) {
  if (
    true
  ) {
    const timeout = setTimeout(function() {
      const frame = document.getElementById('iframe-ads');
      if (frame) {
        frame.remove();
      }
      clearTimeout(timeout);
      navigator.spatialNavigationEnabled = false;
      containerCfg.onAdFinished();
    }, 10000);

    const ifrm = document.createElement('iframe');
    ifrm.setAttribute('id', 'iframe-ads');
    ifrm.setAttribute('style', 'border: none;');
    document.getElementById(this.adsWrapperId).appendChild(ifrm);
    const kaiJioAds = KaiDisplayAdsSdk('iframe-ads');
    console.log('.......................................................');
    console.log(window.advid);
    console.log(window.uid);
    kaiJioAds.init({
      banner: {
        w: window.screen.width,
        h: (window.screen.height - 26), // top bar 26px deducted
        adspotkey: '78eab85a',
        pkgname: 'com.kaiostech.birdy',
        adrefresh: 0,
        customData: '', // '{"key1": "Some key value to be sent", "key2": "Some key2 value to be sent"}'
        advid: window.advid,
        uid: window.uid
      },
      listeners: {
        adviewability: function() {
          clearTimeout(timeout);
          navigator.spatialNavigationEnabled = true;
          console.log('...............................................adsvisibility!!!!');
        },
        adclose: function() {
          clearTimeout(timeout);
          console.log('ad close 1');
          navigator.spatialNavigationEnabled = false;
          console.log('close spatiaNavigation...............');
          containerCfg.onAdFinished();
        },
        adclick: function() {
          clearTimeout(timeout);
          console.log('ad clicked 1');
        }
      }
    });
  } else {
    // we directory enter the game
    navigator.spatialNavigationEnabled = false;
    containerCfg.onAdFinished();
  }
}

var game = new Phaser.Game(
    240,
    320,
    Phaser.CANVAS,
    'phaser-game'
);


// Conditional add for scroll Advertisement
document.addEventListener("keydown", function (e) {
    e.key === "ArrowDown" && e.preventDefault();
});
document.addEventListener("keydown", function (e) {
    e.key === "ArrowUp" && e.preventDefault();
});


game.custom = Object.freeze({
    debug: true,
    fontStyle: Object.freeze({
        "font": "Open Sans",
        "fontSize": "20px",
        "fill": "#FFFFFF",
        'fontWeight':'600'
    }),
    fontSKStyle: Object.freeze({
      font: 'Open Sans',
      fontSize: '16px',
      fontWeight: '600',
      fill: "#ffffff",
    })
});

var Render = {};


// var adsConfig = {
//     kai: {
//         app: "Birdy",
//         publisher: "e6dfb88f-ca58-4816-85ad-27eb07964d34",
//         loadingTheme: 'dark',
//         ads: {
//             splash: {
//                 slotName: "splash",
//                 type: "Interstitial"
//             },
//             restart: {
//                 slotName: "restart",
//                 type: "Interstitial"
//             },
//             playAgain: {
//                 slotName: "playAgain",
//                 type: "Interstitial"
//             },
//             goHome: {
//                 slotName: "goHome",
//                 type: "Interstitial"
//             }
//         },
//         timeout: 5000
//     },
//     jio: {
//         loadingTheme: 'dark',
//         ads: {
//             restart: {
//                 source: 'com.kaiostech.birdy',
//                 adspot: '78eab85a',
//                 type: 'Interstitial'
//             },
//             playAgain: {
//                 source: 'com.kaiostech.birdy',
//                 adspot: '78eab85a',
//                 type: 'Interstitial'
//             },
//             goHome: {
//                 source: 'com.kaiostech.birdy',
//                 adspot: '78eab85a',
//                 type: 'Interstitial'
//             }
//         }
//     }
// };
game.ads = new JioKaiAds('adsWrapper');
// game.ads.setConfig(adsConfig);

game.state.add('ads', ads);
game.state.add('splash', splash);
game.state.add('menu', menu);
game.state.add('game', game_start);
game.state.add('about', about);
game.state.add('options', options);
game.state.add('score', score);

game.init = false;
navigator.mozL10n.ready(function () {

    if (Render.Options.isPaused) {
      Render.Options.hide();
    }
    if (Render.Confirm.isOpen) {
      Render.Confirm.hide();
    }
    if (Render.YouLose.isLose) {
      Render.YouLose.hide();
    }
    game.paused = false;
    if (!game.init) {
      game.state.start('splash');
    } else {
      game.jumpSound.stop();
      game.state.start('menu');
    }

    // game.paused = false;
    // game.ads.nextState = 'menu';
    // game.state.start('ads', true, false, 'splash');
});

Render.Options = {
  isPaused: false,
  show: function () {
    this.isPaused = true;

    if(game_start.currentState === game_start.gameState.INGAME) {
      game_start.canMove = false;
      game.paused = true;
    }

    this.optionsGroup = game.add.group();

    var bgOptions = game.add.image(0, 0, 'bg-options');
    bgOptions.alpha = 0.9;

    var pauseBoard = game.add.image(17, 82, 'pause-board');
    var pauseTitle = game.add.text(game.world.centerX, 120 ,
      locale.getLocale('options').toUpperCase(), {font:'20px Riffic Bold', fill: '#fff'});
    pauseTitle.setShadow(2,2,'rgba(0,0,0,0.3)',3);
    pauseTitle.anchor.setTo(0.5);

    this.focus = game.add.sprite(19, 158, 'focus');
    this.focus.visible = true;
    this.focus2 = game.add.sprite(19, 198, 'focus');
    this.focus2.visible = false;

    this.soundOn = game.add.sprite(170, 172, 'on');
    this.soundOn.visible = false;
    this.soundOff = game.add.sprite(170, 172, 'off');
    this.soundOff.visible = false;

    this.vibrationOn = game.add.sprite(170, 208, 'on');
    this.vibrationOn.visible = false;
    this.vibrationOff = game.add.sprite(170, 208, 'off');
    this.vibrationOff.visible = false;

    this.index = 0;

    game.navigator.register({
      label: {
        rsk: locale.getLocale('resume'),
        lsk: locale.getLocale('home')
      },
      action: {
        softLeft: function () {
          Render.Options.hide();
          game.paused = false;
          game.state.start('menu');
        },
        enter: function () {
          Render.Options.selectOpValue();
        },
        softRight: function () {
          Render.Options.hide();
        },
        ArrowUp: function () {
          if (Render.Options.index === 1) {
            --Render.Options.index;
            Render.Options.focus.visible = true;
            Render.Options.focus2.visible = false;
          }
        },
        ArrowDown: function () {
          if (Render.Options.index < 1) {
            ++Render.Options.index;
            Render.Options.focus.visible = false;
            Render.Options.focus2.visible = true;
          }
        },
        0: function () {
          Render.Options.hide();
        },
        backspace: function () {
          Render.Options.hide();
        },
        endCall: function () {
          Render.Confirm.show();
        }
      }
    });

    this.loadSound()
    this.loadVibration();

    var style = Object.assign({}, game.custom.fontStyle);
    // style.fontSize = "24px";

    var sound = game.add.text(43, 170, locale.getLocale('sound'), game.custom.fontStyle);
    sound.setShadow(3, 3, 'rgba(0,0,0,0.3)', 5);
    var vibration = game.add.text(43, 205, locale.getLocale('vibration'), game.custom.fontStyle);
    vibration.setShadow(3, 3, 'rgba(0,0,0,0.3)', 5);

    this.optionsGroup.addMultiple([bgOptions, pauseBoard, pauseTitle, this.focus, this.focus2, sound, vibration,
      this.vibrationOn, this.vibrationOff, this.soundOff, this.soundOn]);

  },
  hide: function () {
    if(game_start.currentState === game_start.gameState.INGAME) {
      game_start.canMove = true;
      game.paused = false;
    }

    this.optionsGroup.removeAll();
    game.navigator.setLastConfig();
    this.isPaused = false;
  },
  selectOpValue: function () {
    switch (this.index) {
      case 0:
        this.saveData('sound', (!this.soundOn.visible));
        this.loadSound();
        break;
      case 1:
        this.saveData('vibration', (!this.vibrationOn.visible));
        this.loadVibration();
        break;
    }
  },
  saveData: function (key, value) {
    localStorage.setItem(key, value);
  },
  loadData: function (key) {
    var value = JSON.parse(localStorage.getItem(key));
    if (null === value || undefined === value) {
      this.saveData(key, true);
      return true;
    }
    return value;
  },

  loadSound: function () {
    var sound = this.loadData('sound');
    this.soundOn.visible = sound;
    this.soundOff.visible = !sound;
  },
  loadVibration: function () {
    var vibration = this.loadData('vibration');
    this.vibrationOn.visible = vibration;
    this.vibrationOff.visible = !vibration;
  }
};


Render.Confirm = {
  isOpen: false,
  show: function () {
    this.isOpen = true;

    if (game_start.currentState === game_start.gameState.INGAME) {
      game.paused = true;
      game_start.canMove = false;
    }

    this.confirmGroup = game.add.group();
    var confirmBack = game.add.image(0, 0, 'bg-exit');

    game.navigator.register({
      label: {
        lsk: locale.getLocale('cancel'),
        rsk: locale.getLocale('quit')
      },
      action: {
        softLeft: function () {
          Render.Confirm.hide();
        },
        softRight: function () {
          // parent.window.close();
          window.jio_SDK.exit();
        },
        backspace: function () {
          Render.Confirm.hide();
        },
        endCall: function () {
          window.jio_SDK.window.close();
        }
      }
    });

    var logo = game.add.image(game.world.centerX, game.world.centerY - 50, 'logo');
    logo.anchor.setTo(0.5)

    var dialog = game.add.image(game.world.centerX, game.height - 80, 'bg-dialog');
    dialog.anchor.setTo(0.5)

    var txt = game.add.text(dialog.x, dialog.y, locale.getLocale('confirmText'), { font: 'Open Sans', fontSize: '16px', fontWeight: '600', align: "center", fill: "#0a0a0a" });
    txt.anchor.setTo(0.5);
    txt.wordWrap = true;
    txt.wordWrapWidth = 200;

    this.confirmGroup.addMultiple([confirmBack, logo, dialog, txt]);
  },
  hide: function () {
    if (game_start.currentState === game_start.gameState.INGAME && !Render.Options.isPaused) {
      game_start.canMove = true;
      game.paused = false;
    }
    this.isOpen = false;
    this.confirmGroup.removeAll();
    game.navigator.setLastConfig();
  }
};

Render.YouLose = {
  isLose: false,
  show: function (currentScore) {
    this.isLose = true;

    game_start.canMove = false;

    this.youLoseGroup = game.add.group();
    game.navigator.register({
      label: {
        lsk: locale.getLocale('home'),
        rsk: locale.getLocale('playAgain')
      },
      action: {
        //get actions from game_start

        softLeft: function () {
          Render.YouLose.hide();
          game.ads.nextState = 'menu';
          game.state.start('ads', true, false, 'goHome');
        },
        softRight: function () {
          Render.YouLose.hide();

          game_start.btBlock = true;
          game_start.switchState(game_start.gameState.STANDBY);
          game.ads.nextState = 'game';
          game.state.start('ads', true, false, 'playAgain');

          setTimeout(function () {
            game_start.btBlock = false;
          }, 200);
        },
        backspace: function () {
          Render.Confirm.show();
        },
        endCall: function () {
          Render.Confirm.show();
        }
      }
    });

    var spriteGameOver = game.add.sprite(0, 0, 'bg-game-over');
    var textGameOver = game.add.text(game.world.centerX, 100, locale.getLocale('gameOver').toUpperCase(),
      { font: '34px Riffic Bold', 'fontWeight': '800', fill: '#ebaa2d', align: 'center' });
    textGameOver.setShadow(2, 2, 'rgba(0,0,0,0.3)', 3);
    textGameOver.anchor.setTo(0.5);
    textGameOver.lineSpacing = -10;
    textGameOver.wordWrap = true;
    textGameOver.wordWrapWidth = 40;

    var bgScore = game.add.sprite(2, 141, 'gameOverScore');

    var textScore = game.add.text(game.world.centerX, 200, currentScore, {
      font: '40px Open Sans',
      fill: '#fff',
      align: "center"
    }).setShadow(2, 2, 'rgba(0,0,0,0.3)', 3);
    textScore.anchor.set(0.5, 0);

    var yourScore = game.add.text(game.world.centerX, 190,
      locale.getLocale('yourScore').toUpperCase(),
      { font: '20px Riffic Bold', fill: '#fff' }).setShadow(2, 2, 'rgba(0,0,0,0.3)', 3);
    yourScore.anchor.setTo(0.5);
    this.youLoseGroup.addMultiple([spriteGameOver, textGameOver, bgScore, textScore, yourScore]);
  },
  hide: function () {
    game_start.canMove = true;
    this.isLose = false;
    this.youLoseGroup.removeAll();
    game.navigator.setLastConfig();
  }
};
