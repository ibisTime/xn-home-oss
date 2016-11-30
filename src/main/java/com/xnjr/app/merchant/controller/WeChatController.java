package com.xnjr.app.merchant.controller;

import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xnjr.app.controller.BaseController;
import com.xnjr.app.http.BizConnecter;
import com.xnjr.app.http.JsonUtils;
import com.xnjr.app.util.UploadUtil;

@Controller
@RequestMapping(value = "/merchant/wechat")
public class WeChatController extends BaseController {
	
	@RequestMapping(value = "/page", method = RequestMethod.GET)
	@ResponseBody
	public Object pageWechat(@RequestParam Map<String,String> map)
	{
		return BizConnecter.getBizData("806030", JsonUtils.mapToJson(map),Object.class);
	}
		
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/add", method = RequestMethod.POST)
	@ResponseBody
	public Object addGenre(@SuppressWarnings("rawtypes") @RequestBody Map map)
	{
		return BizConnecter.getBizData("806020", JsonUtils.mapToJson(map),Object.class);
	}
	
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/edit", method = RequestMethod.POST)
	@ResponseBody
	public Object editGenre(@SuppressWarnings("rawtypes") @RequestBody Map map)
	{	
		return BizConnecter.getBizData("806022", JsonUtils.mapToJson(map),Object.class);
	}
	
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/delete", method = RequestMethod.POST)
	@ResponseBody
	public Object deleteGenre(@SuppressWarnings("rawtypes") @RequestBody Map map)
	{
		return BizConnecter.getBizData("806021", JsonUtils.mapToJson(map),Object.class);
	}
}
