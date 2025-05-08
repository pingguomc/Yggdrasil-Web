import fs from 'fs';
import toml from '@iarna/toml';
import logger from './logger.js';

// 读取配置文件
export const readConfigFile = () => {
    try {
        logger.info('开始读取配置文件');
        const data = fs.readFileSync('./config.toml', 'utf8');
        const config = toml.parse(data);
        logger.info('成功读取并解析配置文件');
        return config;
    } catch (error) {
        logger.error(`读取或解析配置文件时出错: ${error.message}`);
        // 读取失败时结束程序运行
        process.exit(1);
    }
};

