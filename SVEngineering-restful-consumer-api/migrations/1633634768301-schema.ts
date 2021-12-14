import {MigrationInterface, QueryRunner} from "typeorm";

export class schema1633634768301 implements MigrationInterface {
    name = 'schema1633634768301'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`sportsvisio\`.\`annotation_actor_qualifier\` (\`id\` char(36) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP, \`qualifier\` varchar(255) NOT NULL, \`actorId\` char(36) NULL, INDEX \`IDX_5be734a26e4327c97b9d88f0fa\` (\`qualifier\`), UNIQUE INDEX \`IDX_1b3e0ae62ff2def3ad9e5b0bab\` (\`id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sportsvisio\`.\`league\` (\`id\` char(36) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP, \`name\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_110716368f5130cdc669dacea4\` (\`name\`), UNIQUE INDEX \`IDX_0bd74b698f9e28875df738f786\` (\`id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sportsvisio\`.\`team_scheduled_game_assn\` (\`id\` char(36) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP, \`designation\` varchar(255) NOT NULL, \`color\` varchar(255) NOT NULL, \`teamId\` char(36) NULL, \`gameId\` char(36) NULL, UNIQUE INDEX \`IDX_bb40ff7686416da72cce14972c\` (\`id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sportsvisio\`.\`team\` (\`id\` char(36) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP, \`deletedAt\` datetime(6) NULL, \`name\` varchar(255) NOT NULL, \`imageUrl\` varchar(255) NOT NULL DEFAULT '', \`accountId\` char(36) NULL, UNIQUE INDEX \`IDX_f57d8293406df4af348402e4b7\` (\`id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sportsvisio\`.\`player_profile_follow\` (\`id\` char(36) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP, \`followerId\` char(36) NULL, \`followingId\` char(36) NULL, UNIQUE INDEX \`IDX_cc9faad51b648d62618cddd7c5\` (\`id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sportsvisio\`.\`player_profile\` (\`id\` char(36) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP, \`deletedAt\` datetime(6) NULL, \`firstName\` varchar(255) NOT NULL DEFAULT '', \`lastName\` varchar(255) NOT NULL DEFAULT '', \`imageUrl\` varchar(255) NOT NULL DEFAULT '', \`nickName\` varchar(255) NOT NULL DEFAULT '', \`userId\` char(36) NULL, UNIQUE INDEX \`IDX_ba3de28aa98207f3a21145feb8\` (\`id\`), UNIQUE INDEX \`REL_04e6d9418935e12700c38a8cfa\` (\`userId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sportsvisio\`.\`player_profile_team_player_assn\` (\`id\` char(36) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP, \`approved\` tinyint NOT NULL DEFAULT 0, \`profileId\` char(36) NULL, \`playerId\` char(36) NULL, UNIQUE INDEX \`IDX_1b03fecf7016f60839bc37c200\` (\`id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sportsvisio\`.\`team_player\` (\`id\` char(36) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP, \`deletedAt\` datetime(6) NULL, \`name\` varchar(255) NOT NULL, \`number\` varchar(255) NOT NULL, \`teamId\` char(36) NULL, UNIQUE INDEX \`IDX_e0e94c07a2898080511249550b\` (\`id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sportsvisio\`.\`annotation_actor\` (\`id\` char(36) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP, \`deletedAt\` datetime(6) NULL, \`identifier\` varchar(255) NOT NULL, \`type\` enum ('player', 'referee', 'ball', 'net', 'backboard', 'scoreboard') NOT NULL, \`designation\` varchar(255) NOT NULL, \`annotationId\` char(36) NULL, \`teamPlayerId\` char(36) NULL, INDEX \`IDX_e14d6140075f24f2b03c4e8cab\` (\`identifier\`), INDEX \`IDX_ca6b54657dbc9eaef76c16e409\` (\`type\`), INDEX \`IDX_4c365de7d3ae0f8029a7237aec\` (\`designation\`), UNIQUE INDEX \`IDX_a7a19919aaf3ade8c62e58833e\` (\`id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sportsvisio\`.\`annotation_action_qualifier\` (\`id\` char(36) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP, \`qualifier\` enum ('2-point', '3-point', 'made', 'miss', 'offensive', 'defensive', 'unknown') NOT NULL, \`actionId\` char(36) NULL, INDEX \`IDX_9e9556950e88e2902e3264ea04\` (\`qualifier\`), INDEX \`IDX_a0410ecf6fd40a12505d360874\` (\`actionId\`), UNIQUE INDEX \`IDX_caffaa392cc943b06a63980b08\` (\`id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sportsvisio\`.\`annotation_action\` (\`id\` char(36) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP, \`deletedAt\` datetime(6) NULL, \`action\` enum ('jump-ball', 'field-goal', 'free-throw', 'rebound', 'assist-2', 'uknown') NOT NULL, \`startTime\` varchar(255) NOT NULL, \`startFrame\` int NOT NULL, \`confidence\` decimal(2,2) NOT NULL, \`location\` varchar(255) NOT NULL, \`annotationId\` char(36) NULL, \`actorId\` char(36) NULL, INDEX \`IDX_50db37f9a1207b10bcc921d4d7\` (\`action\`), UNIQUE INDEX \`IDX_17a0dbc1f124ac992f20e7c3cf\` (\`id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sportsvisio\`.\`annotation\` (\`id\` char(36) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP, \`deletedAt\` datetime(6) NULL, \`source\` enum ('ai', 'manual') NOT NULL DEFAULT 'ai', \`s3ETag\` varchar(255) NOT NULL, \`videoName\` varchar(255) NOT NULL, \`inputType\` varchar(255) NOT NULL, \`frameResolution\` varchar(255) NOT NULL, \`frameRate\` int NOT NULL, \`frameSkip\` int NOT NULL, \`processingWindowSize\` int NOT NULL, \`processingWindowOverlap\` int NOT NULL, \`scheduledGameId\` char(36) NULL, INDEX \`IDX_41ca5305bc1d6700bd0c2a9ec4\` (\`source\`), INDEX \`IDX_789ee39dcc7b5f2241251f4cfc\` (\`videoName\`), INDEX \`IDX_7bf15d6ae56affd3a49833a93e\` (\`inputType\`), UNIQUE INDEX \`IDX_ec39ebae82efb7cfc77302eb7b\` (\`id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sportsvisio\`.\`arena\` (\`id\` char(36) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP, \`deletedAt\` datetime(6) NULL, \`name\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_d9df8cd1b04e2c8ec62cf9daae\` (\`name\`), UNIQUE INDEX \`IDX_652b8490f93101a044a90d25a6\` (\`id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sportsvisio\`.\`court\` (\`id\` char(36) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP, \`deletedAt\` datetime(6) NULL, \`name\` varchar(255) NOT NULL, \`arenaId\` char(36) NULL, INDEX \`IDX_effe599792b9cc965796b2c73f\` (\`name\`), UNIQUE INDEX \`IDX_d8f2118c52b422b03e0331a7b9\` (\`id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sportsvisio\`.\`device_stream\` (\`id\` char(36) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP, \`deletedAt\` datetime(6) NULL, \`streamName\` varchar(255) NOT NULL, \`deviceId\` char(36) NULL, INDEX \`IDX_f988230c11647ffefbed9165e3\` (\`streamName\`), UNIQUE INDEX \`IDX_1b8c988d96385764ce5c4dbe41\` (\`id\`), UNIQUE INDEX \`REL_1942d73015198cc6fc02acfc4a\` (\`deviceId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sportsvisio\`.\`device\` (\`id\` char(36) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP, \`deletedAt\` datetime(6) NULL, \`deviceId\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`accountId\` char(36) NULL, UNIQUE INDEX \`IDX_6fe2df6e1c34fc6c18c786ca26\` (\`deviceId\`), UNIQUE INDEX \`IDX_2dc10972aa4e27c01378dad2c7\` (\`id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sportsvisio\`.\`device_scheduled_game_assn\` (\`id\` char(36) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP, \`deletedAt\` datetime(6) NULL, \`videoId\` varchar(255) NOT NULL, \`isActive\` tinyint NOT NULL DEFAULT 0, \`startTime\` int NOT NULL, \`endTime\` int NOT NULL, \`position\` enum ('center', 'left', 'right') NOT NULL DEFAULT 'center', \`gameId\` char(36) NULL, \`deviceId\` char(36) NULL, UNIQUE INDEX \`IDX_f1ac17fcbcf7af329cf0442968\` (\`videoId\`), INDEX \`IDX_565d1117ec7d85478110bec277\` (\`position\`), UNIQUE INDEX \`IDX_f9a5c08e82fa7c56187d9067c4\` (\`id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sportsvisio\`.\`scheduled_game\` (\`id\` char(36) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP, \`startTime\` int NOT NULL, \`endTime\` int NOT NULL, \`description\` varchar(255) NOT NULL DEFAULT '', \`season\` varchar(255) NOT NULL DEFAULT '', \`processedVideoUrl\` varchar(255) NOT NULL DEFAULT '', \`leagueId\` char(36) NULL, \`courtId\` char(36) NULL, \`accountId\` char(36) NULL, UNIQUE INDEX \`IDX_ebb0bbf41874abaa06666fc252\` (\`id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sportsvisio\`.\`account\` (\`id\` char(36) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP, \`inactive\` tinyint NOT NULL DEFAULT 0, \`ownerId\` char(36) NULL, INDEX \`IDX_dec9eb6082099cc8dd4dfe3be1\` (\`inactive\`), UNIQUE INDEX \`IDX_54115ee388cdb6d86bb4bf5b2e\` (\`id\`), UNIQUE INDEX \`REL_72719f338bfbe9aa98f4439d2b\` (\`ownerId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sportsvisio\`.\`user\` (\`id\` char(36) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP, \`deletedAt\` datetime(6) NULL, \`firstName\` varchar(255) NOT NULL DEFAULT '', \`lastName\` varchar(255) NOT NULL DEFAULT '', \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NULL, \`passwordSalt\` varchar(255) NULL, \`inactive\` tinyint NOT NULL DEFAULT 0, UNIQUE INDEX \`IDX_cace4a159ff9f2512dd4237376\` (\`id\`), UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sportsvisio\`.\`account_member_role\` (\`id\` char(36) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP, \`role\` enum ('owner', 'leagueAdmin', 'teamAdmin') NOT NULL, \`accountMemberAssnId\` char(36) NULL, UNIQUE INDEX \`IDX_0818cc4c35c6c778a70eb6c3cc\` (\`id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sportsvisio\`.\`account_member_role_assn\` (\`id\` char(36) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NULL DEFAULT CURRENT_TIMESTAMP, \`accepted\` tinyint NOT NULL DEFAULT 0, \`userId\` char(36) NULL, \`accountId\` char(36) NULL, UNIQUE INDEX \`IDX_ea34afb71a128b645c9d286631\` (\`id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sportsvisio\`.\`seed\` (\`file\` varchar(255) NOT NULL, PRIMARY KEY (\`file\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sportsvisio\`.\`league_teams_team\` (\`leagueId\` char(36) NOT NULL, \`teamId\` char(36) NOT NULL, INDEX \`IDX_95997e6c6c07a121f7b4430b1d\` (\`leagueId\`), INDEX \`IDX_910702d60f0094c6d3680a0e54\` (\`teamId\`), PRIMARY KEY (\`leagueId\`, \`teamId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`annotation_actor_qualifier\` ADD CONSTRAINT \`FK_2f9bb7789640916f5845027dadd\` FOREIGN KEY (\`actorId\`) REFERENCES \`sportsvisio\`.\`annotation_actor\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`team_scheduled_game_assn\` ADD CONSTRAINT \`FK_21a94728279ab65c5c9d502e58e\` FOREIGN KEY (\`teamId\`) REFERENCES \`sportsvisio\`.\`team\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`team_scheduled_game_assn\` ADD CONSTRAINT \`FK_0205e68d3659525855e3eb2e2ff\` FOREIGN KEY (\`gameId\`) REFERENCES \`sportsvisio\`.\`scheduled_game\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`team\` ADD CONSTRAINT \`FK_811aba5f3d476db71e160be3d79\` FOREIGN KEY (\`accountId\`) REFERENCES \`sportsvisio\`.\`account\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`player_profile_follow\` ADD CONSTRAINT \`FK_929483e162c1416f205bcef2010\` FOREIGN KEY (\`followerId\`) REFERENCES \`sportsvisio\`.\`player_profile\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`player_profile_follow\` ADD CONSTRAINT \`FK_d034286d7c945c253f8929d92d6\` FOREIGN KEY (\`followingId\`) REFERENCES \`sportsvisio\`.\`player_profile\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`player_profile\` ADD CONSTRAINT \`FK_04e6d9418935e12700c38a8cfaa\` FOREIGN KEY (\`userId\`) REFERENCES \`sportsvisio\`.\`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`player_profile_team_player_assn\` ADD CONSTRAINT \`FK_fbe460f9799f355e1999472fbf5\` FOREIGN KEY (\`profileId\`) REFERENCES \`sportsvisio\`.\`player_profile\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`player_profile_team_player_assn\` ADD CONSTRAINT \`FK_f29cd6a52c425297b71c89fbfbe\` FOREIGN KEY (\`playerId\`) REFERENCES \`sportsvisio\`.\`team_player\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`team_player\` ADD CONSTRAINT \`FK_ba439df2ee27e9bf3dd1e380b65\` FOREIGN KEY (\`teamId\`) REFERENCES \`sportsvisio\`.\`team\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`annotation_actor\` ADD CONSTRAINT \`FK_39fd39d9141f91ab08d2c719199\` FOREIGN KEY (\`annotationId\`) REFERENCES \`sportsvisio\`.\`annotation\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`annotation_actor\` ADD CONSTRAINT \`FK_2d15a3d2a5762881e674d6920b8\` FOREIGN KEY (\`teamPlayerId\`) REFERENCES \`sportsvisio\`.\`team_player\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`annotation_action_qualifier\` ADD CONSTRAINT \`FK_a0410ecf6fd40a12505d360874f\` FOREIGN KEY (\`actionId\`) REFERENCES \`sportsvisio\`.\`annotation_action\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`annotation_action\` ADD CONSTRAINT \`FK_c1e6b37a0702b6c2b429644238f\` FOREIGN KEY (\`annotationId\`) REFERENCES \`sportsvisio\`.\`annotation\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`annotation_action\` ADD CONSTRAINT \`FK_4eee9700a1b34d708613e8a3932\` FOREIGN KEY (\`actorId\`) REFERENCES \`sportsvisio\`.\`annotation_actor\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`annotation\` ADD CONSTRAINT \`FK_3b463153a2f4963712be4b2b1fc\` FOREIGN KEY (\`scheduledGameId\`) REFERENCES \`sportsvisio\`.\`scheduled_game\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`court\` ADD CONSTRAINT \`FK_ab7da24329f728b00b997a4a581\` FOREIGN KEY (\`arenaId\`) REFERENCES \`sportsvisio\`.\`arena\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`device_stream\` ADD CONSTRAINT \`FK_1942d73015198cc6fc02acfc4ae\` FOREIGN KEY (\`deviceId\`) REFERENCES \`sportsvisio\`.\`device\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`device\` ADD CONSTRAINT \`FK_d66b825375117d90ae0015fe8d0\` FOREIGN KEY (\`accountId\`) REFERENCES \`sportsvisio\`.\`account\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`device_scheduled_game_assn\` ADD CONSTRAINT \`FK_e0eb5e7a3c112391acd38fe019f\` FOREIGN KEY (\`gameId\`) REFERENCES \`sportsvisio\`.\`scheduled_game\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`device_scheduled_game_assn\` ADD CONSTRAINT \`FK_95754cdc93808980a2241c2fe52\` FOREIGN KEY (\`deviceId\`) REFERENCES \`sportsvisio\`.\`device\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`scheduled_game\` ADD CONSTRAINT \`FK_9e714f7c100febba4c41396489d\` FOREIGN KEY (\`leagueId\`) REFERENCES \`sportsvisio\`.\`league\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`scheduled_game\` ADD CONSTRAINT \`FK_7f246fc7d8423b2fbc5ec5ca015\` FOREIGN KEY (\`courtId\`) REFERENCES \`sportsvisio\`.\`court\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`scheduled_game\` ADD CONSTRAINT \`FK_1d32ccaf1b8523ee7f0e0cd5d1e\` FOREIGN KEY (\`accountId\`) REFERENCES \`sportsvisio\`.\`account\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`account\` ADD CONSTRAINT \`FK_72719f338bfbe9aa98f4439d2b4\` FOREIGN KEY (\`ownerId\`) REFERENCES \`sportsvisio\`.\`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`account_member_role\` ADD CONSTRAINT \`FK_0020407962644b7415fbed175a8\` FOREIGN KEY (\`accountMemberAssnId\`) REFERENCES \`sportsvisio\`.\`account_member_role_assn\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`account_member_role_assn\` ADD CONSTRAINT \`FK_62b94888173f68c7b3817fa0c6d\` FOREIGN KEY (\`userId\`) REFERENCES \`sportsvisio\`.\`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`account_member_role_assn\` ADD CONSTRAINT \`FK_e9f6d40ab609116f9ecc69ac8d9\` FOREIGN KEY (\`accountId\`) REFERENCES \`sportsvisio\`.\`account\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`league_teams_team\` ADD CONSTRAINT \`FK_95997e6c6c07a121f7b4430b1d9\` FOREIGN KEY (\`leagueId\`) REFERENCES \`sportsvisio\`.\`league\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`league_teams_team\` ADD CONSTRAINT \`FK_910702d60f0094c6d3680a0e544\` FOREIGN KEY (\`teamId\`) REFERENCES \`sportsvisio\`.\`team\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`league_teams_team\` DROP FOREIGN KEY \`FK_910702d60f0094c6d3680a0e544\``);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`league_teams_team\` DROP FOREIGN KEY \`FK_95997e6c6c07a121f7b4430b1d9\``);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`account_member_role_assn\` DROP FOREIGN KEY \`FK_e9f6d40ab609116f9ecc69ac8d9\``);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`account_member_role_assn\` DROP FOREIGN KEY \`FK_62b94888173f68c7b3817fa0c6d\``);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`account_member_role\` DROP FOREIGN KEY \`FK_0020407962644b7415fbed175a8\``);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`account\` DROP FOREIGN KEY \`FK_72719f338bfbe9aa98f4439d2b4\``);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`scheduled_game\` DROP FOREIGN KEY \`FK_1d32ccaf1b8523ee7f0e0cd5d1e\``);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`scheduled_game\` DROP FOREIGN KEY \`FK_7f246fc7d8423b2fbc5ec5ca015\``);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`scheduled_game\` DROP FOREIGN KEY \`FK_9e714f7c100febba4c41396489d\``);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`device_scheduled_game_assn\` DROP FOREIGN KEY \`FK_95754cdc93808980a2241c2fe52\``);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`device_scheduled_game_assn\` DROP FOREIGN KEY \`FK_e0eb5e7a3c112391acd38fe019f\``);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`device\` DROP FOREIGN KEY \`FK_d66b825375117d90ae0015fe8d0\``);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`device_stream\` DROP FOREIGN KEY \`FK_1942d73015198cc6fc02acfc4ae\``);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`court\` DROP FOREIGN KEY \`FK_ab7da24329f728b00b997a4a581\``);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`annotation\` DROP FOREIGN KEY \`FK_3b463153a2f4963712be4b2b1fc\``);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`annotation_action\` DROP FOREIGN KEY \`FK_4eee9700a1b34d708613e8a3932\``);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`annotation_action\` DROP FOREIGN KEY \`FK_c1e6b37a0702b6c2b429644238f\``);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`annotation_action_qualifier\` DROP FOREIGN KEY \`FK_a0410ecf6fd40a12505d360874f\``);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`annotation_actor\` DROP FOREIGN KEY \`FK_2d15a3d2a5762881e674d6920b8\``);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`annotation_actor\` DROP FOREIGN KEY \`FK_39fd39d9141f91ab08d2c719199\``);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`team_player\` DROP FOREIGN KEY \`FK_ba439df2ee27e9bf3dd1e380b65\``);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`player_profile_team_player_assn\` DROP FOREIGN KEY \`FK_f29cd6a52c425297b71c89fbfbe\``);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`player_profile_team_player_assn\` DROP FOREIGN KEY \`FK_fbe460f9799f355e1999472fbf5\``);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`player_profile\` DROP FOREIGN KEY \`FK_04e6d9418935e12700c38a8cfaa\``);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`player_profile_follow\` DROP FOREIGN KEY \`FK_d034286d7c945c253f8929d92d6\``);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`player_profile_follow\` DROP FOREIGN KEY \`FK_929483e162c1416f205bcef2010\``);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`team\` DROP FOREIGN KEY \`FK_811aba5f3d476db71e160be3d79\``);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`team_scheduled_game_assn\` DROP FOREIGN KEY \`FK_0205e68d3659525855e3eb2e2ff\``);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`team_scheduled_game_assn\` DROP FOREIGN KEY \`FK_21a94728279ab65c5c9d502e58e\``);
        await queryRunner.query(`ALTER TABLE \`sportsvisio\`.\`annotation_actor_qualifier\` DROP FOREIGN KEY \`FK_2f9bb7789640916f5845027dadd\``);
        await queryRunner.query(`DROP INDEX \`IDX_910702d60f0094c6d3680a0e54\` ON \`sportsvisio\`.\`league_teams_team\``);
        await queryRunner.query(`DROP INDEX \`IDX_95997e6c6c07a121f7b4430b1d\` ON \`sportsvisio\`.\`league_teams_team\``);
        await queryRunner.query(`DROP TABLE \`sportsvisio\`.\`league_teams_team\``);
        await queryRunner.query(`DROP TABLE \`sportsvisio\`.\`seed\``);
        await queryRunner.query(`DROP INDEX \`IDX_ea34afb71a128b645c9d286631\` ON \`sportsvisio\`.\`account_member_role_assn\``);
        await queryRunner.query(`DROP TABLE \`sportsvisio\`.\`account_member_role_assn\``);
        await queryRunner.query(`DROP INDEX \`IDX_0818cc4c35c6c778a70eb6c3cc\` ON \`sportsvisio\`.\`account_member_role\``);
        await queryRunner.query(`DROP TABLE \`sportsvisio\`.\`account_member_role\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`sportsvisio\`.\`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_cace4a159ff9f2512dd4237376\` ON \`sportsvisio\`.\`user\``);
        await queryRunner.query(`DROP TABLE \`sportsvisio\`.\`user\``);
        await queryRunner.query(`DROP INDEX \`REL_72719f338bfbe9aa98f4439d2b\` ON \`sportsvisio\`.\`account\``);
        await queryRunner.query(`DROP INDEX \`IDX_54115ee388cdb6d86bb4bf5b2e\` ON \`sportsvisio\`.\`account\``);
        await queryRunner.query(`DROP INDEX \`IDX_dec9eb6082099cc8dd4dfe3be1\` ON \`sportsvisio\`.\`account\``);
        await queryRunner.query(`DROP TABLE \`sportsvisio\`.\`account\``);
        await queryRunner.query(`DROP INDEX \`IDX_ebb0bbf41874abaa06666fc252\` ON \`sportsvisio\`.\`scheduled_game\``);
        await queryRunner.query(`DROP TABLE \`sportsvisio\`.\`scheduled_game\``);
        await queryRunner.query(`DROP INDEX \`IDX_f9a5c08e82fa7c56187d9067c4\` ON \`sportsvisio\`.\`device_scheduled_game_assn\``);
        await queryRunner.query(`DROP INDEX \`IDX_565d1117ec7d85478110bec277\` ON \`sportsvisio\`.\`device_scheduled_game_assn\``);
        await queryRunner.query(`DROP INDEX \`IDX_f1ac17fcbcf7af329cf0442968\` ON \`sportsvisio\`.\`device_scheduled_game_assn\``);
        await queryRunner.query(`DROP TABLE \`sportsvisio\`.\`device_scheduled_game_assn\``);
        await queryRunner.query(`DROP INDEX \`IDX_2dc10972aa4e27c01378dad2c7\` ON \`sportsvisio\`.\`device\``);
        await queryRunner.query(`DROP INDEX \`IDX_6fe2df6e1c34fc6c18c786ca26\` ON \`sportsvisio\`.\`device\``);
        await queryRunner.query(`DROP TABLE \`sportsvisio\`.\`device\``);
        await queryRunner.query(`DROP INDEX \`REL_1942d73015198cc6fc02acfc4a\` ON \`sportsvisio\`.\`device_stream\``);
        await queryRunner.query(`DROP INDEX \`IDX_1b8c988d96385764ce5c4dbe41\` ON \`sportsvisio\`.\`device_stream\``);
        await queryRunner.query(`DROP INDEX \`IDX_f988230c11647ffefbed9165e3\` ON \`sportsvisio\`.\`device_stream\``);
        await queryRunner.query(`DROP TABLE \`sportsvisio\`.\`device_stream\``);
        await queryRunner.query(`DROP INDEX \`IDX_d8f2118c52b422b03e0331a7b9\` ON \`sportsvisio\`.\`court\``);
        await queryRunner.query(`DROP INDEX \`IDX_effe599792b9cc965796b2c73f\` ON \`sportsvisio\`.\`court\``);
        await queryRunner.query(`DROP TABLE \`sportsvisio\`.\`court\``);
        await queryRunner.query(`DROP INDEX \`IDX_652b8490f93101a044a90d25a6\` ON \`sportsvisio\`.\`arena\``);
        await queryRunner.query(`DROP INDEX \`IDX_d9df8cd1b04e2c8ec62cf9daae\` ON \`sportsvisio\`.\`arena\``);
        await queryRunner.query(`DROP TABLE \`sportsvisio\`.\`arena\``);
        await queryRunner.query(`DROP INDEX \`IDX_ec39ebae82efb7cfc77302eb7b\` ON \`sportsvisio\`.\`annotation\``);
        await queryRunner.query(`DROP INDEX \`IDX_7bf15d6ae56affd3a49833a93e\` ON \`sportsvisio\`.\`annotation\``);
        await queryRunner.query(`DROP INDEX \`IDX_789ee39dcc7b5f2241251f4cfc\` ON \`sportsvisio\`.\`annotation\``);
        await queryRunner.query(`DROP INDEX \`IDX_41ca5305bc1d6700bd0c2a9ec4\` ON \`sportsvisio\`.\`annotation\``);
        await queryRunner.query(`DROP TABLE \`sportsvisio\`.\`annotation\``);
        await queryRunner.query(`DROP INDEX \`IDX_17a0dbc1f124ac992f20e7c3cf\` ON \`sportsvisio\`.\`annotation_action\``);
        await queryRunner.query(`DROP INDEX \`IDX_50db37f9a1207b10bcc921d4d7\` ON \`sportsvisio\`.\`annotation_action\``);
        await queryRunner.query(`DROP TABLE \`sportsvisio\`.\`annotation_action\``);
        await queryRunner.query(`DROP INDEX \`IDX_caffaa392cc943b06a63980b08\` ON \`sportsvisio\`.\`annotation_action_qualifier\``);
        await queryRunner.query(`DROP INDEX \`IDX_a0410ecf6fd40a12505d360874\` ON \`sportsvisio\`.\`annotation_action_qualifier\``);
        await queryRunner.query(`DROP INDEX \`IDX_9e9556950e88e2902e3264ea04\` ON \`sportsvisio\`.\`annotation_action_qualifier\``);
        await queryRunner.query(`DROP TABLE \`sportsvisio\`.\`annotation_action_qualifier\``);
        await queryRunner.query(`DROP INDEX \`IDX_a7a19919aaf3ade8c62e58833e\` ON \`sportsvisio\`.\`annotation_actor\``);
        await queryRunner.query(`DROP INDEX \`IDX_4c365de7d3ae0f8029a7237aec\` ON \`sportsvisio\`.\`annotation_actor\``);
        await queryRunner.query(`DROP INDEX \`IDX_ca6b54657dbc9eaef76c16e409\` ON \`sportsvisio\`.\`annotation_actor\``);
        await queryRunner.query(`DROP INDEX \`IDX_e14d6140075f24f2b03c4e8cab\` ON \`sportsvisio\`.\`annotation_actor\``);
        await queryRunner.query(`DROP TABLE \`sportsvisio\`.\`annotation_actor\``);
        await queryRunner.query(`DROP INDEX \`IDX_e0e94c07a2898080511249550b\` ON \`sportsvisio\`.\`team_player\``);
        await queryRunner.query(`DROP TABLE \`sportsvisio\`.\`team_player\``);
        await queryRunner.query(`DROP INDEX \`IDX_1b03fecf7016f60839bc37c200\` ON \`sportsvisio\`.\`player_profile_team_player_assn\``);
        await queryRunner.query(`DROP TABLE \`sportsvisio\`.\`player_profile_team_player_assn\``);
        await queryRunner.query(`DROP INDEX \`REL_04e6d9418935e12700c38a8cfa\` ON \`sportsvisio\`.\`player_profile\``);
        await queryRunner.query(`DROP INDEX \`IDX_ba3de28aa98207f3a21145feb8\` ON \`sportsvisio\`.\`player_profile\``);
        await queryRunner.query(`DROP TABLE \`sportsvisio\`.\`player_profile\``);
        await queryRunner.query(`DROP INDEX \`IDX_cc9faad51b648d62618cddd7c5\` ON \`sportsvisio\`.\`player_profile_follow\``);
        await queryRunner.query(`DROP TABLE \`sportsvisio\`.\`player_profile_follow\``);
        await queryRunner.query(`DROP INDEX \`IDX_f57d8293406df4af348402e4b7\` ON \`sportsvisio\`.\`team\``);
        await queryRunner.query(`DROP TABLE \`sportsvisio\`.\`team\``);
        await queryRunner.query(`DROP INDEX \`IDX_bb40ff7686416da72cce14972c\` ON \`sportsvisio\`.\`team_scheduled_game_assn\``);
        await queryRunner.query(`DROP TABLE \`sportsvisio\`.\`team_scheduled_game_assn\``);
        await queryRunner.query(`DROP INDEX \`IDX_0bd74b698f9e28875df738f786\` ON \`sportsvisio\`.\`league\``);
        await queryRunner.query(`DROP INDEX \`IDX_110716368f5130cdc669dacea4\` ON \`sportsvisio\`.\`league\``);
        await queryRunner.query(`DROP TABLE \`sportsvisio\`.\`league\``);
        await queryRunner.query(`DROP INDEX \`IDX_1b3e0ae62ff2def3ad9e5b0bab\` ON \`sportsvisio\`.\`annotation_actor_qualifier\``);
        await queryRunner.query(`DROP INDEX \`IDX_5be734a26e4327c97b9d88f0fa\` ON \`sportsvisio\`.\`annotation_actor_qualifier\``);
        await queryRunner.query(`DROP TABLE \`sportsvisio\`.\`annotation_actor_qualifier\``);
    }

}
