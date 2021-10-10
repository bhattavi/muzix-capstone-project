package com.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Favorite {
	@Id
	private int dataId;
	private String userId;
	private String data;
	public int getDataId() {
		return dataId;
	}
	public void setDataId(int dataId) {
		this.dataId = dataId;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getData() {
		return data;
	}
	public void setData(String data) {
		this.data = data;
	}
	public Favorite(int dataId, String userId, String data) {
		super();
		this.dataId = dataId;
		this.userId = userId;
		this.data = data;
	}
	public Favorite() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Favorite [dataId=" + dataId + ", userId=" + userId + ", data=" + data + "]";
	}
	
	
	
	 
	
	

}
