package com.coddington.poom.controller;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.coddington.poom.service.ContractsService;
import com.coddington.poom.vo.Contract;
import com.coddington.poom.vo.ContractSchedule;
import com.coddington.poom.vo.Question;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.type.TypeReference;

@Controller
public class ContractsController {

	private ContractsService contractsService;

	public void setContractsService(ContractsService contractsService) {
		this.contractsService = contractsService;
	}

	/*
	 * "giverNo" : giverNo, "takerNo" : takerNo, "serviceNo" : serviceNo, "poom" :
	 * poom, "content" : $("#comment>textarea").val(), "contractSchedules" :
	 * contractSchedules
	 * 
	 */
	@RequestMapping(value = "/ajax/contract/register.poom", method = RequestMethod.POST)
	@ResponseBody
	public String register(@RequestBody Map<String, Object> map, Model model) {

		/*
		 * System.out.println(map.get("giverNo"));
		 * System.out.println(map.get("takerNo"));
		 * System.out.println(map.get("serviceNo"));
		 * System.out.println(map.get("content")); System.out.println(map.get("poom"));
		 * System.out.println(map.get("contractSchedules"));
		 */
		Contract contract = new Contract();
		ObjectMapper mapper = new ObjectMapper();
		try {
			contract.setGiverNo(Integer.parseInt(map.get("giverNo").toString()));
			contract.setTakerNo(Integer.parseInt(map.get("takerNo").toString()));
			contract.setServiceNo(Integer.parseInt(map.get("serviceNo").toString()));
			contract.setContent(map.get("content").toString());
			List<ContractSchedule> contractSchedules = mapper.convertValue(map.get("contractSchedules"),
					new TypeReference<List<ContractSchedule>>() {});
			
			contract.setContractSchedules(contractSchedules);
			/*
			for (ContractSchedule contractSchedule : contractSchedules) {
				System.out.println(contractSchedule.getScheduleNo());				
			}*/
			
			contractsService.register(contract);
			
		} catch (Exception e) {
			
			// TODO: handle exception
		}

		return "{ \"data\" : true }";
	}

}
