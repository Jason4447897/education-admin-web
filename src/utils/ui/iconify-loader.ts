/**
 * 离线图标加载器
 *
 * 通过预加载图标集数据到 @iconify/vue 的运行时缓存，
 * 彻底避免运行时从 CDN（api.iconify.design）获取图标，
 * 显著提升首屏图标渲染速度，并支持内网/离线环境。
 *
 * 使用方式：
 * 1. 安装所需图标集：pnpm add -D @iconify-json/[icon-set-name]
 * 2. 在此文件中导入并注册图标集
 * 3. 在组件中使用：<ArtSvgIcon icon="ri:home-line" />
 *
 * @module utils/ui/iconify-loader
 * @author Art Design Pro Team
 */

import { addCollection } from '@iconify/vue'

// 系统主图标库（Remix Icon，项目中约 90% 图标使用此集合）
import riIcons from '@iconify-json/ri/icons.json'

// 项目实际使用的辅助图标库
import vaadinIcons from '@iconify-json/vaadin/icons.json'
import solarIcons from '@iconify-json/solar/icons.json'
import systemUiconsIcons from '@iconify-json/system-uicons/icons.json'
import fluentIcons from '@iconify-json/fluent/icons.json'
import iconamoonIcons from '@iconify-json/iconamoon/icons.json'
import iconParkOutlineIcons from '@iconify-json/icon-park-outline/icons.json'
import ixIcons from '@iconify-json/ix/icons.json'

// 通用扩展图标库（加载动画等，保留备用）
import svgSpinners from '@iconify-json/svg-spinners/icons.json'
import lineMd from '@iconify-json/line-md/icons.json'

// 注册离线图标集
addCollection(riIcons)
addCollection(vaadinIcons)
addCollection(solarIcons)
addCollection(systemUiconsIcons)
addCollection(fluentIcons)
addCollection(iconamoonIcons)
addCollection(iconParkOutlineIcons)
addCollection(ixIcons)
addCollection(svgSpinners)
addCollection(lineMd)
