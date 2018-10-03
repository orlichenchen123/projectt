use TornirDB
Go
Create table Tornir
(
  ID int primary key identity,
  Game_Name nvarchar(70),
  Player1 nvarchar(70),
  Player2 nvarchar(70),
  Who_Won nvarchar(70),
) 
Go
Insert into Tornir values ('pokimon','Yoni','Ben','Yoni')
Insert into Tornir values ('minunim','orli','limor','orli')
Insert into Tornir values ('pakpak','Roni','Ron','Roni')
Insert into Tornir values ('TikTak','Yaron','Tal','Yaron')
Insert into Tornir values ('Yuyu','Yonim','Bela','Bela')
Insert into Tornir values ('pokimon2','Yoni2','Ben2','Yoni2')
Insert into Tornir values ('pokimon3','Yoni3','Ben3','Yoni3')
Insert into Tornir values ('pokimon4','Yoni4','Ben4','Yoni4')
Insert into Tornir values ('pokimon5','Yoni5','Ben5','Yoni5')
Insert into Tornir values ('pokimon6','Yoni6','Ben6','Yoni6')

SELECT TOP (1000) [ID],[Game_Name],[Player1],[Player2],[Who_Won]
FROM [TornirDB].[dbo].[Tornir]
