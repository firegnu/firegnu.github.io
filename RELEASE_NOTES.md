v1.0.1
------
 - Fixing bugs
    - #34141 Adding response to Score Button on game screen
    - #34143 Game still running when exiting Option screen
    - #34149 Display some Placeholders in the Birdy screen after display turns off

v1.0.2
------
 - Adding support for another languages

 v1.0.3
 -------
  - Fixing Bugs
    - #34415 #34416 Disabling keys 1 and 2 from the game.
    - #34531 When user resumes the game from "Press '5' to play" screen the bird falls
    - #34605 #34408 Fixing wrong toggle on option screen

v1.0.4
--------
 - Fixing bugs
    - #34969 Selector is missing in "Options" view from Play screen
    - #34530 #34966 #34970 LSK shows "Score" instead "Restart" on Play screen
    - #35321 - [Birdy][v1.0.1]The screen will become black when tapping "Play again"
    - #35470 - [Birdy][1.0] Pressing '5' or Enter does nothing after pressing 'Restart

v1.0.5
-------
  - Fixing bugs
    - #36047
    - #34970 - [Birdy] After Score and Quit game screens, CSK does not work

v1.0.6
-------
  - Update the L10N support according to KaiOS standards (for example, use the same format for locales files).
  - Languages with locale files: pt-BR, en-US (default).
  Bug fixing:
  - Bug 34411 - [Birdy][KaiOS Store]The sound output from receiver few seconds after plug out headset.
  - Bug 36700 - [Store][Birdy]LSK no action when start the game.

v1.0.7
-------
  - Update the support for others language (ar, de, en-US, es, es-MX, fr-CA, pt-BR, pt-PT, ru).

v1.0.8
-------
  - Support ADS.
  Bug fixing:
  - Bug 41762 - [Language][Arabic][Russian][German][Birdy][v1.0.7]The“PRESS "5"OR ENTER TO PLAY”message is display cut
  - Bug 41613 - [Store][Birdy] Display extra black and wirte screen when user open Birdy app.
  - Bug 41313 - [Birdy][v1.0.7][French-CA] On Game Over screen , the text "VOTRE SCORE"" must be bold.
  - Bug 41312 - [Birdy][v1.0.7][French-CA] On Play Options screen , the text "OPTIONS" must be bold.
  - Bug 41311 - [Birdy][v1.0.7][French-CA] On about screen , the text "propos" must be bold.
  - Bug 41310 - [Birdy][v1.0.7] [French-CA] On options screen, text "OPTIONS" must be in bold.
  - Bug 41308 - [Birdy][v1.0.7] [French-CA] On score screen, text score must be in bold.
  - Bug 41307 - [Birdy][v1.0.7] [French-CA] On home screen, [RSK] and [LSK] were showed incorrect.
  - Bug 41303 - [Birdy][v1.0.7] [Portuguse-PT] On Game over screen , error on [RSk] label and score in bold.

v1.0.9
-------
  - Update ADS.
  Bug fixing:
  - Bug 42945 - [Birdy][v1.0.9]The About page label has a wrong space between the lines.
  - Bug 42838 - [Birdy][v1.0.9]The About page label in Russian is passing beyond the screen.
  - Bug 42837 - [Birdy][v1.0.9]The [RSK] in Game Over Page is passing beyond the screen.
  - Bug 42836 - [Birdy][v1.0.9]The [RSK] is not translated in the language Portuguese-BR.
  - Bug 42835 - [Birdy][v1.0.9]The [RSK] in Game Over Page has a wrong position.
  - Bug 42834 - [Birdy][v1.0.9][French-CA] Error in the style of Start page.

v1.1.0
-------
  - Control Up, Down, Left, Rigth (2, 4, 6, 8).
  - Control softkey Backspace  and EndCall.
  - Return confirmation Dialog quit game.
  - Control Center (5).
  - Volume control (1 e 3).
  - Pause and Resume (0).
  - Support ADS VMAX
 
v1.1.1
-------
  - Update file translation

v1.1.2
-------
  - Bug 45768 - [REG][Birdy][v1.1.1]Tap Home key can't back to Birdy's home screen when playing game.

v1.1.3
-------
- Update process build for copy file release notes.
- Update language.

v1.1.4
-------
- Update ADS-Adapter version 1.5.2.
- Add loading screen while requesting ads.

v1.1.5
-------
  - Update ads-adapter with new ads solution(kai) KaiAds from David SKY.
  - Remove VMAX as ads solution

v1.1.6
-------
  - Fix bug that gameplay's softkey was triggered when displaying ads after returning from Store
  - Update KaiAds to v1.1.3 which now sends language settings to SSP
  - Revert type and permissions to manifest file